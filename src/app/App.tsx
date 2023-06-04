import "./styles/index.scss";
import { Link } from "react-router-dom";
import { getClassNames } from "@shared/helpers/getClassNames/getClassNames";
import { useTheme } from "@app/proveders/ThemeProvider";
import { AppRouter } from "@app/proveders/AppRouter";
import { NavBar } from "@widgets/NavBar";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={getClassNames("app", {}, [theme])}>
      <NavBar />
      <AppRouter />
      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  );
};
