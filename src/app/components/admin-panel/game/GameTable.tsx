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
import EditDialog from "./EditDialog";
import { Game } from "@prisma/client";
import AddGame from "./AddGame";

export default function GameTable({ games }: { games: Game[] }) {
  return (
    <Box sx={{ width: "100%", height: "100%", mt: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <AddGame />
        <Typography
          sx={{
            color: "text.primary",
            textAlign: "center",
            my: 2,
          }}
          component="h2"
          variant="h5"
        >
          بازی ها
        </Typography>
      </Box>
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
              <TableCell align="center">نام بازی</TableCell>
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
            {games.map((game) => (
              <TableRow
                key={game.id}
                sx={{
                  "& > *": {
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
                    {game.id}
                  </TableCell>
                }
                <TableCell align="center">{game.title}</TableCell>
                <TableCell
                  sx={{ borderRight: "none !important", p: 0.5 }}
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
                    <EditDialog game={game} />
                    <DeleteModal game={game} />
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
