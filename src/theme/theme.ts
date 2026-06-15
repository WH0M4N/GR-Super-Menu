import { createTheme } from "@mui/material";
import { estedad } from "@/theme/font";

export const theme = createTheme({
  typography: {
    fontFamily: estedad.style.fontFamily,
  },
  palette: {
    mode: "dark",
  },
});
