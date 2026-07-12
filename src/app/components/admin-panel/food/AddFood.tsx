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
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormEvent, useRef, useState } from "react";
import Image from "next/image";
import categories from "@/data/categories";
import { useRouter } from "next/navigation";

export default function AddFood() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [baseTaste, setBaseTaste] = useState("");
  const [isWeeklyOffer, setIsWeeklyOffer] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim()) return;
    if (!category) return;
    if (price <= 0) return;

    const res = await fetch("/api/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        desc,
        category,
        price,
        image: imageSrc,
        baseTaste,
        isWeeklyOffer,
      }),
    });

    if (!res.ok) {
      console.error(await res.text());
      alert("خطایی رخ داد.");
      return;
    }

    handleClose();

    setTitle("");
    setDesc("");
    setCategory("");
    setPrice(0);
    setImageSrc("");
    setBaseTaste("");
    setIsWeeklyOffer(false);

    router.refresh();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCategoryChange = (e: SelectChangeEvent) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        size="large"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 0.5,
          mt: 1,
          borderColor: "btn.blue",
          color: "btn.blue",
          "&:hover": {
            bgcolor: "btn.lightBlue",
          },
        }}
        variant="outlined"
      >
        اضافه کردن غذای جدید +
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
        <DialogTitle sx={{ color: "text.primary" }}>
          اضافه کردن غذای جدید
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: "text.gray", my: 1 }}>
            اطلاعات مورد نظر را وارد کنید
          </DialogContentText>
          <form onSubmit={(e) => handleSubmit(e)} id="add-food-form">
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
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
                  labelId="category-label"
                  id="category-select"
                  label="دسته بندی"
                  size="small"
                  variant="outlined"
                  value={category}
                  onChange={handleCategoryChange}
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
          <Button type="submit" form="add-food-form">
            ذخیره
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
