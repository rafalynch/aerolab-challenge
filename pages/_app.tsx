import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store";
import "@fontsource/raleway/400.css";

const theme = extendTheme({
  colors: {
    aerolab: {
      primary: "#0AD4FA",
    },
  },
  fonts: {
    body: "Raleway",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS={false} theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
