import React, { useEffect } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Loading from "@/components/Loader";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Set the duration for the loading page in milliseconds (e.g., 3000ms = 3 seconds)

    return () => clearTimeout(timeout); // Clear the timeout when the component is unmounted
  }, []);

  return (
    <>
      {loading ? <Loading /> : null} <Component {...pageProps} />{" "}
    </>
  );
}
