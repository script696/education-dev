import s from "./LangSwitcher.module.scss";
import { getClassNames } from "@shared/helpers";
import { FC } from "react";
import { Button, ThemeButton } from "@shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggleTranslate = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button
      onClick={toggleTranslate}
      theme={ThemeButton.CLEAR}
      className={getClassNames(s[""], {}, [className])}
    >
      {t("Язык")}
    </Button>
  );
};
