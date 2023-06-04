import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import {getClassNames} from "@shared/helpers/getClassNames/getClassNames";
import {useTheme} from "@app/proveders/ThemeProvider";
import {AboutPage} from "@pages/ui/AboutPage";
import {MainPage} from "@pages/ui/MainPage";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={getClassNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/about"} element={<AboutPage />} />
      </Routes>
    </div>
  );
};
