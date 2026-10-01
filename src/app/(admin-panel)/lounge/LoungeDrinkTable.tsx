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
import { LoungeDrink } from "@prisma/client";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import AddLoungeDrink from "./AddLoungeDrink";
import DeleteLoungeDrink from "./DeleteLoungeDrink";
import EditLoungeDrink from "./EditLoungeDrink";
import categories from "@/data/loungeCategories";

export default function LoungeDrinkTable({
  loungeDrinks,
}: {
  loungeDrinks: LoungeDrink[];
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [selectedCategory, setSelectedCategory] = useState("همه");

  const filteredDrinks =
    selectedCategory === "همه"
      ? loungeDrinks
      : loungeDrinks.filter((drink) => drink.category === selectedCategory);

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <AddLoungeDrink />

        <Typography
          sx={{
            color: "text.primary",
            textAlign: "center",
            my: 2,
          }}
          component="h2"
          variant="h5"
        >
          نوشیدنی های لانژ
        </Typography>
      </Box>

      <TableContainer
        component={Box}
        sx={{
          maxHeight: 500,
          overflowY: "auto",
          overflowX: "auto",

          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          bgcolor: "background.default",

          "& .MuiTableCell-root": {
            py: 2,
          },

          "&::-webkit-scrollbar": {
            width: 8,
            height: 8,
          },

          "&::-webkit-scrollbar-thumb": {
            bgcolor: "#b55a18",
            borderRadius: 10,
          },
        }}
      >
        <Table
          stickyHeader
          size="small"
          aria-label="lounge drinks table"
          sx={{
            minWidth: 600,
          }}
        >
          <TableHead>
            <TableRow
              sx={{
                "& > *": {
                  fontWeight: "bold !important",
                },
              }}
            >
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

              <TableCell align="center">نام نوشیدنی</TableCell>

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
              </TableCell>

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
            {filteredDrinks.map((drink) => (
              <TableRow key={drink.id}>
                <TableCell
                  sx={{
                    display: {
                      xs: "none",
                      md: "table-cell",
                    },
                  }}
                  align="center"
                >
                  {drink.id}
                </TableCell>

                <TableCell align="center">{drink.title}</TableCell>

                <TableCell align="center">{drink.category}</TableCell>

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
                    <EditLoungeDrink drink={drink} />
                    <DeleteLoungeDrink drink={drink} />
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
