// import "../styles/globals.css";
import "../app/globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
// import logo from '@/app/cyparta-logo.png'
import { Provider } from "react-redux";
import { store } from "@/store/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Software Development - Information Technology Solutions"
        />
        <meta
          name="keywords"
          content="Software Development - Information Technology Solutions"
        />
        <title>
          Cyparta | Software Development - Information Technology Solutions
        </title>
        <link rel="icon" href="/cyparta-logo.png" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
          <ToastContainer
            position="bottom-left"
            hideProgressBar
          />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
