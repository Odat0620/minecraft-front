import { VFC, ReactNode } from "react";

import { Header } from "@/components/organisms/Header";

export const HeaderLayout: VFC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
