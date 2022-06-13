import { ReactNode, FC } from "react";

import styles from "./layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className={`${styles.pageLayout} page-layout flex flex-col justify-between pt-20`}
    >
      {children}
    </div>
  );
};
