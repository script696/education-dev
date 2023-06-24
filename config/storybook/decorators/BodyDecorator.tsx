import "../../../src/app/styles/index.scss";
import { FC } from "react";

export const BodyDecorator = (Story: FC) => {
  return (
    <body className={"light"}>
      <Story />
    </body>
  );
};

export default BodyDecorator;
