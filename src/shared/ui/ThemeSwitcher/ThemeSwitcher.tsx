import s from "./ThemeSwitcher.module.scss";
import { getClassNames } from "@shared/helpers";
import { FC } from "react";
import { Theme, useTheme } from "@app/providers/ThemeProvider";
import LightIcon from "@shared/assets/icons/theme-light.svg";
import DarkIcon from "@shared/assets/icons/theme-dark.svg";
import { Button, ThemeButton } from "@shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={getClassNames(s[""], {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
