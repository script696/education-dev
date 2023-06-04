import { Counter } from "./components/Counter";
import "./index.scss";
import { Link, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";

export const App = () => {
  return (
    <div className={"app"}>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Routes>
        <Route path={"/"} element={<MainPageLazy />} />
        <Route path={"/about"} element={<AboutPageLazy />} />
      </Routes>
    </div>
  );
};
