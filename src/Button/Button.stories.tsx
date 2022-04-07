import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: true },
  },
  args: { children: "Button" },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "contained",
};

export const SmallOutlined = Template.bind({});
SmallOutlined.args = {
  variant: "outlined",
};

// SmallOutlined.play = async ({ args, canvasElement }) => {
//   const canvas = within(canvasElement);
//   await userEvent.click(canvas.getByRole("button"));
//   await expect(args.onClick).toHaveBeenCalled();
// };
