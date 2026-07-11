import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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
import { Food, uniqueFoodCategories } from "@/data/mockData";
import Image from "next/image";
export default function EditDialog({ food }: { food: Food }) {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleChange = (e: any) => {
    setCategory(e.target.value);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState(food.image);
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
          <form onSubmit={(e) => handleSubmit(e)} id="subscription-form">
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
                defaultValue={food.title}
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
                autoFocus
                defaultValue={food.desc}
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
                  value={food.category}
                  label="دسته بندی"
                  size="small"
                  variant="outlined"
                  onChange={(e) => handleChange(e)}
                >
                  {uniqueFoodCategories.map((food) => {
                    return (
                      <MenuItem key={food.id} value={food.category}>
                        {food.category}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <TextField
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
                id="food-price"
                name="food-price"
                inputMode="numeric" // Shows numeric keyboard on mobile
                label="قیمت"
                defaultValue={food.price}
                type="text"
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
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>لغو</Button>
          <Button type="button" form="subscription-form">
            ذخیره
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
