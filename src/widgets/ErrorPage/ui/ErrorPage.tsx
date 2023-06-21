import s from "./ErrorPage.module.scss";
import { getClassNames } from "@shared/helpers";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@shared/ui/Button/Button";

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage: FC<ErrorPageProps> = ({ className }) => {
  const { t } = useTranslation();
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={getClassNames(s["error-page"], {}, [className])}>
      <p>{t("Произошла непредвиденная ошибка")}</p>
      <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
    </div>
  );
};
