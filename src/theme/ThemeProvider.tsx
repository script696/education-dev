import { LOCALE_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";
import { FC, ReactNode, useMemo, useState } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

const defaultTheme =
  (localStorage.getItem(LOCALE_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
