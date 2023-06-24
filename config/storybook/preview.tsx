import type { Preview } from "@storybook/react";
import BodyDecorator from "./decorators/BodyDecorator";
import { RouterDecorator } from "./decorators/RouterDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [BodyDecorator, RouterDecorator],
};

export default preview;
