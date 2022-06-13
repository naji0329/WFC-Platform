import { ReactNode, FC } from "react";

import styles from "./button.module.css";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  primary?: boolean;
  className?: string;
};

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  primary,
  className,
}) => {
  return (
    <button
      className={`${className} ${primary ? styles.btnPrimary : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
