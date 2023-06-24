import type { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "@widgets/NavBar";

const meta: Meta<typeof NavBar> = {
  title: "widgets/NavBar",
  component: NavBar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Clear: Story = {
  args: {
    className: "",
  },
};
