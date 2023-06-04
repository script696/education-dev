import s from "./Button.module.scss";
import { getClassNames } from "@shared/helpers";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  ...props
}) => {
  return (
    <button
      className={getClassNames(s["button"], {}, [className, s[theme]])}
      {...props}
    >
      {children}
    </button>
  );
};
