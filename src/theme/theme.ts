import { createTheme } from "@mui/material";
import { estedad } from "@/theme/font";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#e53935", // strong red accent (logo / highlights)
    },

    secondary: {
      main: "#d36a1e", // ← darker brick orange
      light: "#e68a4b",
      dark: "#b55a18",
    },

    background: {
      default: "#0d0d0d", // deep black base
      paper: "rgba(0,0,0,0.65)", // overlays on image
    },

    text: {
      primary: "#ffffff",
      secondary: "rgba(255,255,255,0.75)",
      disabled: "rgba(255,255,255,0.4)",
    },
  },

  typography: {
    fontFamily: estedad.style.fontFamily,

    h6: {
      fontWeight: 600,
      // letterSpacing: "0.5px",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },

  shape: {
    borderRadius: 10,
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "rgba(0,0,0,0.55)", // lets brick image show through
          backdropFilter: "blur(6px)",
          boxShadow: "none",
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 80,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
  },
});

export default theme;

// export const theme = createTheme({
//   typography: {
//     fontFamily: estedad.style.fontFamily,
//   },
//   palette: {
//     mode: "dark",
//   },
// });
// // theme.ts
// import { createTheme } from "@mui/material/styles";
