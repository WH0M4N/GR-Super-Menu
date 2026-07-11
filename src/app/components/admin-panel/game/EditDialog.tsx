import {
  Box,
  Button,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
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
import { Game, GAME_GENRES } from "@/data/mockData";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Image from "next/image";
import { toEnglishDigits } from "../../../../../utils/helper";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  slotProps: {
    paper: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  },
};

export default function EditDialog({ game }: { game: Game }) {
  const parsePlayerCounts = (input: string): number[] => {
    const normalized = toEnglishDigits(input)
      .replace(/،/g, ",") // Persian comma
      .replace(/\s+/g, "") // remove spaces
      .replace(/-/g, ","); // treat - as separator

    const numbers = normalized
      .split(",")
      .map(Number)
      .filter((n) => Number.isInteger(n) && n > 0);

    return [...new Set(numbers)].sort((a, b) => a - b);
  };
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [playerCounts, setPlayerCounts] = useState<number[]>([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const [gameGenres, setGameGenres] = useState<string[]>(game.genre);

  const handleChange = (event: SelectChangeEvent<typeof gameGenres>) => {
    const {
      target: { value },
    } = event;
    setGameGenres(event.target.value as string[]);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState(game.image);
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
                defaultValue={game.title}
                margin="dense"
                id="game-title"
                name="game-title"
                label="نام بازی"
                type="text"
                fullWidth
                variant="outlined"
              />
              <TextField
                defaultValue={game.desc}
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
                <InputLabel id="category-label">ژانر</InputLabel>
                <Select
                  labelId="category-label"
                  id="category-select"
                  value={gameGenres}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) =>
                    selected
                      .map(
                        (id) =>
                          GAME_GENRES.find((genre) => genre.id === id)?.label
                      )
                      .join(", ")
                  }
                  MenuProps={MenuProps}
                  label="‌ژانر"
                  size="small"
                  variant="outlined"
                  onChange={(e) => handleChange(e)}
                  multiple
                >
                  {GAME_GENRES.map((genre, index) => {
                    const selected = gameGenres.includes(genre.id);
                    const SelectionIcon = selected
                      ? CheckBoxIcon
                      : CheckBoxOutlineBlankIcon;

                    return (
                      <MenuItem key={index} value={genre.id}>
                        <SelectionIcon
                          fontSize="small"
                          style={{
                            marginRight: 8,
                            padding: 9,
                            boxSizing: "content-box",
                          }}
                        />
                        <ListItemText primary={genre.label} />
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <TextField
                defaultValue={game.playerCount.toString().replaceAll(",", "-")}
                fullWidth
                label="تعداد بازیکنان"
                onChange={(e) => {
                  const value = e.target.value;
                  setText(value);
                  setPlayerCounts(parsePlayerCounts(value));
                }}
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
                      style={{
                        borderRadius: "8px",
                        objectFit: "cover",
                      }}
                      fill
                      sizes="150px"
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
