import React, { useEffect } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Loading from "@/components/Loader";

import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { base, baseGoerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Set the duration for the loading page in milliseconds (e.g., 3000ms = 3 seconds)

    return () => clearTimeout(timeout); // Clear the timeout when the component is unmounted
  }, []);

  const { chains, publicClient } = configureChains(
    [base, baseGoerli],
    [publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "CycGods!",
    projectId: "6a695714116d7d29cab5eaedecb82460",
    chains,
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });

  return (
    <>
      {loading ? <Loading /> : null}
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider modalSize="compact" chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}
