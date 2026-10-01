import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { FaEdit } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormEvent, useRef, useState } from "react";
import Image from "next/image";
import { LoungeDrink } from "@prisma/client";
import categories from "@/data/categories";
import { useRouter } from "next/navigation";

export default function EditLoungeDrink({ drink }: { drink: LoungeDrink }) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [imageSrc, setImageSrc] = useState(drink.image);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState(drink.category);
  const [title, setTitle] = useState(drink.title);
  const [desc, setDesc] = useState(drink.desc ?? "");
  const [price, setPrice] = useState(drink.price);
  const [isWeeklyOffer, setIsWeeklyOffer] = useState(drink.isWeeklyOffer);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;
    if (!category) return;
    if (price <= 0) return;

    const res = await fetch(`/api/lounge-drinks/${drink.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        desc,
        category,
        price,
        image: imageSrc,
        baseTaste: drink.baseTaste,
        isWeeklyOffer,
      }),
    });

    if (!res.ok) {
      console.error(await res.text());
      alert("خطایی رخ داد.");
      return;
    }

    handleClose();
    router.refresh();
  };

  const handleCategoryChange = (e: SelectChangeEvent) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        size="small"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 0.5,
          borderColor: "btn.blue",
          color: "btn.blue",
          "&:hover": {
            bgcolor: "btn.lightBlue",
          },
        }}
        variant="outlined"
      >
        ویرایش
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: {
              xs: "none",
              md: "flex",
            },
          }}
          component="span"
        >
          <FaEdit />
        </Box>
      </Button>

      <Dialog
        fullWidth
        dir="rtl"
        slotProps={{
          paper: {
            sx: {
              bgcolor: "background.default",
            },
          },
        }}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle sx={{ color: "text.primary" }}>ویرایش</DialogTitle>

        <DialogContent>
          <DialogContentText sx={{ color: "text.gray", my: 1 }}>
            اطلاعات مورد نظر را ویرایش کنید
          </DialogContentText>

          <form onSubmit={handleSubmit} id="edit-lounge-drink-form">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextField
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                size="small"
                margin="dense"
                label="نام نوشیدنی"
                type="text"
                fullWidth
                variant="outlined"
              />

              <TextField
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                size="small"
                margin="dense"
                label="توضیحات"
                type="text"
                fullWidth
                multiline
                maxRows={7}
                variant="outlined"
              />

              <FormControl fullWidth>
                <InputLabel id="lounge-edit-category-label">
                  دسته بندی
                </InputLabel>

                <Select
                  value={category}
                  onChange={handleCategoryChange}
                  labelId="lounge-edit-category-label"
                  label="دسته بندی"
                  size="small"
                  variant="outlined"
                >
                  {categories.map((category, idx) => (
                    <MenuItem key={idx} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                size="small"
                margin="dense"
                inputMode="numeric"
                label="قیمت"
                type="number"
                fullWidth
                placeholder="تومان"
                variant="outlined"
              />

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: "150px",
                    height: "150px",
                    position: "relative",
                  }}
                >
                  {imageSrc ? (
                    <Image
                      fill
                      style={{
                        borderRadius: "8px",
                        objectFit: "cover",
                      }}
                      src={imageSrc}
                      alt="lounge drink image"
                    />
                  ) : (
                    <Typography
                      sx={{
                        color: "text.gray",
                        width: "100%",
                        textAlign: "center",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      تصویری وجود ندارد
                    </Typography>
                  )}
                </Box>

                <input
                  ref={inputRef}
                  type="file"
                  accept="image/jpeg, image/png, image/jpg, image/webp"
                  hidden
                  onChange={(e) => {
                    const file = e.target.files?.[0];

                    if (!file) return;

                    const reader = new FileReader();

                    reader.onload = () => {
                      setImageSrc(reader.result as string);
                    };

                    reader.readAsDataURL(file);
                  }}
                />

                <Button
                  onClick={() => inputRef.current?.click()}
                  type="button"
                  variant="outlined"
                  size="small"
                >
                  عوض کردن عکس
                </Button>
              </Box>
            </Box>

            <FormControlLabel
              control={
                <Checkbox
                  checked={isWeeklyOffer}
                  onChange={(e) => setIsWeeklyOffer(e.target.checked)}
                />
              }
              label="پیشنهاد ویژه هفته"
            />
          </form>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>لغو</Button>
          <Button type="submit" form="edit-lounge-drink-form">
            ذخیره
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
