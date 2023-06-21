import s from "./PageLoader.module.scss";
import { getClassNames } from "@shared/helpers";
import { FC } from "react";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={getClassNames(s["page-loader"], {}, [className])}>
      <div className={getClassNames(s["lds-roller"], {}, [className])}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
