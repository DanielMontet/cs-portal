import "../styles/globals.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
