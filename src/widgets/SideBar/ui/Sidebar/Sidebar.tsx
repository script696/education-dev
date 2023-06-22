import s from "./Sidebar.module.scss";
import { getClassNames } from "@shared/helpers";
import { FC, useState } from "react";
import { ThemeSwitcher } from "@shared/ui/ThemeSwitcher/ThemeSwitcher";
import { LangSwitcher } from "@shared/ui/LangSwitcher";

interface SideBarProps {
  className?: string;
}

export const Sidebar: FC<SideBarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <div
      data-testid={"sidebar"}
      className={getClassNames(
        s["sidebar"],
        { [s["collapsed"]]: isCollapsed },
        [className]
      )}
    >
      <button onClick={handleToggle} data-testid={"sidebar-toggle"}>
        toggle
      </button>
      <div className={s["switcher"]}>
        <ThemeSwitcher />
        <LangSwitcher className={s["lang-switcher"]} />
      </div>
    </div>
  );
};
