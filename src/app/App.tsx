import "./styles/index.scss";
import { getClassNames } from "@shared/helpers/getClassNames/getClassNames";
import { useTheme } from "@app/providers/ThemeProvider";
import { AppRouter } from "@app/providers/AppRouter";
import { NavBar } from "@widgets/NavBar";
import { PageLoader } from "@shared/ui/PageLoader/ui/PageLoader";
import { Suspense } from "react";
import { Sidebar } from "@widgets/SideBar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <body className={getClassNames("app", {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <NavBar />
        <div className={"content-page"}>
          <Sidebar />
          <div className={"page-wrapper"}>
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </body>
  );
};
