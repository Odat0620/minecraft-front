import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { ChakraProvider } from "@chakra-ui/react";

import "../styles/globals.css";
import theme from "@/theme/theme";
import { HeaderLayout } from "@/components/templates/HeaderLayout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <SWRConfig
        value={{
          onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
            if (error.status === 404) return;
            if (retryCount >= 5) return;
            setTimeout(() => revalidate({ retryCount: retryCount + 1 }), 5000);
          },
        }}
      >
        <HeaderLayout>
          <Component {...pageProps} />
        </HeaderLayout>
      </SWRConfig>
    </ChakraProvider>
  );
};

export default MyApp;
