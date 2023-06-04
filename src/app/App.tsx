import "./styles/index.scss";
import { Link } from "react-router-dom";
import { getClassNames } from "@shared/helpers/getClassNames/getClassNames";
import { useTheme } from "@app/providers/ThemeProvider";
import { AppRouter } from "@app/providers/AppRouter";
import { NavBar } from "@widgets/NavBar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={getClassNames("app", {}, [theme])}>
      <NavBar />
      <AppRouter />
    </div>
  );
};
