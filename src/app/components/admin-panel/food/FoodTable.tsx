import {
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import DeleteModal from "./DeleteModal";
import EditDialog from "./EditDialog";
import { Food } from "@prisma/client";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import categories from "@/data/categories";

export default function FoodTable({ foods }: { foods: Food[] }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [selectedCategory, setSelectedCategory] = useState("همه");

  const filteredFoods =
    selectedCategory === "همه"
      ? foods
      : foods.filter((food) => food.category === selectedCategory);

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Typography
        sx={{
          color: "text.primary",
          textAlign: "center",
          my: 2,
        }}
        component="h2"
        variant="h5"
      >
        غذاها🍕
      </Typography>
      <TableContainer
        component={Box}
        sx={{
          maxHeight: 500, // adjust as you like
          overflowY: "auto",
          overflowX: "hidden",

          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          bgcolor: "background.default",

          "& .MuiTableCell-root": {
            py: 2,
          },

          "&::-webkit-scrollbar": {
            width: 8,
          },
          "&::-webkit-scrollbar-thumb": {
            bgcolor: "#b55a18",
            borderRadius: 10,
          },
        }}
      >
        <Table stickyHeader size="small" aria-label="a dense table">
          <TableHead>
            <TableRow
              sx={{
                "& > *": {
                  fontWeight: "bold !important",
                  // borderRight: "1px solid black !important",
                  // borderBottom: "1px solid black !important",
                },
              }}
            >
              {
                <TableCell
                  sx={{
                    display: {
                      xs: "none",
                      md: "table-cell",
                    },
                  }}
                  align="center"
                >
                  شماره
                </TableCell>
              }
              <TableCell align="center">نام غذا</TableCell>
              <TableCell align="center">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 0.5,
                  }}
                >
                  دسته بندی
                  <IconButton
                    size="small"
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                  >
                    <CiFilter />
                  </IconButton>
                </Box>
              </TableCell>{" "}
              <TableCell align="center" sx={{ borderRight: "none !important" }}>
                تغییرات
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              "& > tr:last-child > td": {
                borderBottom: "none !important",
              },
            }}
          >
            {filteredFoods.map((food) => (
              <TableRow
                key={food.id}
                sx={{
                  "& > *": {
                    // borderRight: "1px solid !important",
                    // borderBottom: "1px solid !important",
                  },
                }}
              >
                {
                  <TableCell
                    sx={{
                      display: {
                        xs: "none",
                        md: "table-cell",
                      },
                    }}
                    align="center"
                  >
                    {food.id}
                  </TableCell>
                }
                <TableCell align="center">{food.title}</TableCell>
                <TableCell align="center">{food.category}</TableCell>
                <TableCell
                  sx={{
                    borderRight: "none !important",
                    p: 0.5,
                  }}
                  align="center"
                >
                  <Box
                    sx={{
                      display: "flex",
                      fontSize: 4,
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      gap: 1,
                      "& > *": {
                        py: 0.1,
                      },
                    }}
                  >
                    <EditDialog food={food} />
                    <DeleteModal food={food} />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
          <MenuItem
            onClick={() => {
              setSelectedCategory("همه");
              setAnchorEl(null);
            }}
          >
            همه
          </MenuItem>

          {categories.map((category) => (
            <MenuItem
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setAnchorEl(null);
              }}
            >
              {category}
            </MenuItem>
          ))}
        </Menu>
      </TableContainer>
    </Box>
  );
}
