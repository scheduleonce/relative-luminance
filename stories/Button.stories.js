import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    themeColor: {
      control: { type: "color", presetColors: ["#006bb1"] },
    },
    // we want to hide className from the doc as it doesn't contribute much for the storybook doc
    // we use this hack to hide it
    // https://storybook.js.org/docs/react/api/arg-types#if
    label: {
      if: { arg: "doesntexist", exists: true },
    },
    onClick: {
      if: { arg: "doesntexist", exists: true },
    },
  },
};

export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};
