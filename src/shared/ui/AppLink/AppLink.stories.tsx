import type { Meta, StoryObj } from "@storybook/react";
import { AppLink, AppLinkTheme } from "@shared/ui/AppLink/AppLink";

const meta: Meta<typeof AppLink> = {
  title: "widgets/AppLink",
  component: AppLink,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.SECONDARY,
  },
};
