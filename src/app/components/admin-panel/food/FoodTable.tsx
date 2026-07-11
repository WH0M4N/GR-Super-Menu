import {
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
  Box,
  Typography,
} from "@mui/material";
import DeleteModal from "./DeleteModal";
import { foods } from "@/data/mockData";
import EditDialog from "./EditDialog";

export default function FoodTable() {
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
        sx={{
          border: "1px solid black",
          borderRadius: 0.5,
          overflowX: "hidden",
          background: "background.default",
          width: "100%",
          // display : "block" ,
          "&  .MuiTableCell-root": {
            py: 2,
          },
        }}
        component={Box}
      >
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow
              sx={{
                "& > *": {
                  fontWeight: "bold !important",
                  borderRight: "1px solid black !important",
                  borderBottom: "1px solid black !important",
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
              <TableCell align="center">دسته بندی</TableCell>
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
            {foods.map((food) => (
              <TableRow
                key={food.id}
                sx={{
                  "& > *": {
                    borderRight: "1px solid black !important",

                    borderBottom: "1px solid black !important",
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
                      gap: 0.4,
                      "& > *": {
                        py: 0.1,
                      },
                    }}
                  >
                    <EditDialog food={food} />
                    <DeleteModal food={food}/>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
