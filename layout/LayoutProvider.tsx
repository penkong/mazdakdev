// ---------------------- -------- ---

import React, { ReactNode } from "react";
import Head from "next/head";

// ---------------------- -------- ---

import { HeaderProvider, FooterProvider } from "./";

// ---------------------- -------- ---

interface AppProps {
  children?: ReactNode;
}

// ---------------------- -------- ---

const _LayoutProvider: React.FC<AppProps> = ({ children }) => {
  return (
    <>
      <Head>
      <title>Mazdak - Penbeh!</title>
      </Head>
      <HeaderProvider />
      {children}
      <FooterProvider />
    </>
  );
};
// ---------------------- -------- ---

export const LayoutProvider = _LayoutProvider;
