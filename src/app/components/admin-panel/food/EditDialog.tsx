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
import { Food } from "@prisma/client";
import categories from "@/data/categories";
import { useRouter } from "next/navigation";

export default function EditDialog({ food }: { food: Food }) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState(food.image);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState(food.category);
  const [title, setTitle] = useState(food.title);
  const [desc, setDesc] = useState(food.desc ?? "");
  const [price, setPrice] = useState(food.price);
  const [isWeeklyOffer, setIsWeeklyOffer] = useState(food.isWeeklyOffer);

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

    const res = await fetch(`/api/foods/${food.id}`, {
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
        baseTaste: food.baseTaste,
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
          <form onSubmit={(e) => handleSubmit(e)} id="edit-food-form">
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
                sx={{
                  // Default
                  "& .MuiOutlinedInput-root fieldset": {
                    borderColor: "text.gray",
                  },
                  "& .MuiFormLabel-root": {
                    color: "text.gray",
                  },

                  // Hover
                  "& .MuiOutlinedInput-root:hover fieldset": {
                    borderColor: "text.gray",
                  },

                  // Focused
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "text.gray",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "text.gray",
                  },
                }}
                margin="dense"
                id="food-title"
                name="food-title"
                label="نام غذا"
                type="text"
                fullWidth
                variant="outlined"
              />
              <TextField
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                size="small"
                sx={{
                  // Default
                  "& .MuiOutlinedInput-root fieldset": {
                    borderColor: "text.gray",
                  },
                  "& .MuiFormLabel-root": {
                    color: "text.gray",
                  },

                  // Hover
                  "& .MuiOutlinedInput-root:hover fieldset": {
                    borderColor: "text.gray",
                  },

                  // Focused
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "text.gray",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "text.gray",
                  },
                }}
                margin="dense"
                id="food-description"
                name="food-description"
                label="توضیحات"
                type="text"
                fullWidth
                multiline
                maxRows={7}
                variant="outlined"
              />
              <FormControl fullWidth>
                <InputLabel id="category-label">دسته بندی</InputLabel>
                <Select
                  value={category}
                  onChange={handleCategoryChange}
                  labelId="category-label"
                  id="category-select"
                  label="دسته بندی"
                  size="small"
                  variant="outlined"
                >
                  {categories.map((category, idx) => {
                    return (
                      <MenuItem key={idx} value={category}>
                        {category}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <TextField
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                size="small"
                sx={{
                  // Default
                  "& .MuiOutlinedInput-root fieldset": {
                    borderColor: "text.gray",
                  },
                  "& .MuiFormLabel-root": {
                    color: "text.gray",
                  },

                  // Hover
                  "& .MuiOutlinedInput-root:hover fieldset": {
                    borderColor: "text.gray",
                  },

                  // Focused
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "text.gray",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "text.gray",
                  },
                }}
                margin="dense"
                id="food-price"
                name="food-price"
                inputMode="numeric" // Shows numeric keyboard on mobile
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
                  sx={{ width: "150px", height: "150px", position: "relative" }}
                >
                  {imageSrc ? (
                    <Image
                      fill
                      style={{
                        borderRadius: "8px",
                        objectFit: "cover",
                      }}
                      src={imageSrc}
                      alt="food image"
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
                  accept="image/jpeg, image/png, image/jpg , image/webp"
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
          <Button type="submit" form="edit-food-form">
            ذخیره
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
