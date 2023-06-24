import type { Meta, StoryObj } from "@storybook/react";
import { PageLoader } from "@shared/ui/PageLoader/ui/PageLoader";

const meta: Meta<typeof PageLoader> = {
  title: "widgets/PageLoader",
  component: PageLoader,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Primary: Story = {
  args: {
    className: "",
  },
};
