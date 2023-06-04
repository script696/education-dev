import s from "./NavBar.module.scss";
import { getClassNames } from "@shared/helpers/getClassNames/getClassNames";
import { FC } from "react";
import { AppLink } from "@shared/ui/AppLink";
import { AppLinkTheme } from "@shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "@shared/ui/ThemeSwitcher/ThemeSwitcher";

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
  return (
    <div className={getClassNames(s["navbar"], {}, [className])}>
      <div className={s["links"]}>
        <AppLink
          to={"/"}
          className={s["main-link"]}
          theme={AppLinkTheme.SECONDARY}
        >
          Main
        </AppLink>
        <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
          About
        </AppLink>
      </div>
    </div>
  );
};
