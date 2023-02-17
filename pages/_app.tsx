import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme/index";
import TagManager from "react-gtm-module";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-W7GVFVT" });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Script
        id="Adsense-id"
        data-ad-client="ca-pub-6520138402418007"
        async
        strategy="afterInteractive"
        onError={(e) => {
          console.error("Script failed to load", e);
        }}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
