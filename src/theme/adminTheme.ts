import { createTheme } from "@mui/material/styles";
import theme from "./theme";

export const common = {
  typography: {
    fontFamily: theme.typography.fontFamily,
    h6: theme.typography.h6,
  },
  shape: theme.shape,
};

const adminTheme = createTheme(common, {
  mode: "light",
  direction: "rtl",
  palette: {
    background: {
      default: "#f5f5f5",
    },
    error: {
      main: "#e53935",
    },
    text: {
      primary: "#000000f1",
      // gray: "#939090",
    },
    secondary: {
      main: "rgb(25,118,210)",
    },
    btn: {
      green: "rgb(152, 255, 149)",
      blue: "rgb(25, 118, 210)",
      lightBlue: "rgba(25,118,210,.1)",
      lightGreen: "rgba(152, 255, 149 , .5)",
    },
  },
});

export default adminTheme;
