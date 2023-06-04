import "./styles/index.scss";
import { Link } from "react-router-dom";
import { getClassNames } from "@shared/helpers/getClassNames/getClassNames";
import { useTheme } from "@app/proveders/ThemeProvider";
import { AppRouter } from "@app/proveders/AppRouter";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={getClassNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <AppRouter />
    </div>
  );
};
