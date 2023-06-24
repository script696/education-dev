import type { Meta, StoryObj } from "@storybook/react";
import { ThemeSwitcher } from "@shared/ui/ThemeSwitcher/ThemeSwitcher";

const meta: Meta<typeof ThemeSwitcher> = {
  title: "widgets/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Primary: Story = {
  args: {
    className: "",
  },
};
