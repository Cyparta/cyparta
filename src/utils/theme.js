import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    danger: {
      main: "rgba(236, 35, 43, 1)",
    },
    dark: {
      main: "rgba(49, 47, 48, 1)"
    }
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: '1400px !important',
        },
      },
    },
  },
});
