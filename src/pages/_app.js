// import "../styles/globals.css";
import "../app/globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";
import CssBaseline from '@mui/material/CssBaseline';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
