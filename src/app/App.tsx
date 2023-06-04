import "./styles/index.scss";
import { getClassNames } from "@shared/helpers/getClassNames/getClassNames";
import { useTheme } from "@app/providers/ThemeProvider";
import { AppRouter } from "@app/providers/AppRouter";
import { NavBar } from "@widgets/NavBar";
import { Sidebar } from "@widgets/SideBar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={getClassNames("app", {}, [theme])}>
      <NavBar />
      <div className={"content-page"}>
        <Sidebar />
        <div className={"page-wrapper"}>
          <AppRouter />
        </div>
      </div>
    </div>
  );
};
