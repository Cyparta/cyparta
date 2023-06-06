// import "../styles/globals.css";
import "../app/globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
// import logo from '@/app/cyparta-logo.png'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="description" content="Software Development - Information Technology Solutions" />
      <meta name="keywords" content="Software Development - Information Technology Solutions" />
      <title>Cyparta | Software Development - Information Technology Solutions</title>
      <link rel="icon" href="/cyparta-logo.png" /> 
    </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
