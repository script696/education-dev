import s from "./Sidebar.module.scss";
import { getClassNames } from "@shared/helpers";
import { FC, useState } from "react";
import { ThemeSwitcher } from "@shared/ui/ThemeSwitcher/ThemeSwitcher";

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
      className={getClassNames(
        s["sidebar"],
        { [s["collapsed"]]: isCollapsed },
        [className]
      )}
    >
      <button onClick={handleToggle}>toggle</button>
      <div className={s["switcher"]}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
