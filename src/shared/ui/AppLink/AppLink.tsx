import s from "./AppLink.module.scss";
import { FC, ReactNode } from "react";
import { getClassNames } from "@shared/helpers/getClassNames/getClassNames";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  children,
  to,
  theme = AppLinkTheme.PRIMARY,
  ...props
}) => {
  return (
    <Link
      className={getClassNames(s["navbar"], {}, [className, s[theme]])}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};
