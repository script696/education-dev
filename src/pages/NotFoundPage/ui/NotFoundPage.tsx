import s from "./NotFoundPage.module.scss";
import { getClassNames } from "@shared/helpers";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={getClassNames(s["not-found-page"], {}, [className])}>
      {t("Страница не найдена")}
    </div>
  );
};
