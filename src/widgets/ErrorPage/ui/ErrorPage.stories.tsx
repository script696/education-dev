import type { Meta, StoryObj } from "@storybook/react";
import { ErrorPage } from "@widgets/ErrorPage";

const meta: Meta<typeof ErrorPage> = {
  title: "widgets/ErrorPage",
  component: ErrorPage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const Clear: Story = {
  args: {
    className: "",
  },
};
