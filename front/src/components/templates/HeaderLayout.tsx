import { VFC, ReactNode } from "react";

import { Header } from "@/components/organisms/layouts/Header";

export const HeaderLayout: VFC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
