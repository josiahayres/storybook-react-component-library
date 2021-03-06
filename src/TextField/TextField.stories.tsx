import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextField } from "./TextField";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/TextField",
  component: TextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
  args: {
    color: "primary",
    label: "DAT TextField",
    variant: "outlined",
    helperText: "Helper text",
    stackProps: { spacing: 1 },
    focused: false,
  },
} as ComponentMeta<typeof TextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  id: "primary-text-field",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Small",
  size: "small",
};
