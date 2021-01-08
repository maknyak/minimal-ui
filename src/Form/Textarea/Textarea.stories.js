/* eslint-disable react/prop-types */
// Input.stories.js

import { Textarea } from "./Textarea";

export default {
  title: "Components/Form/Textarea",
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component: "Input are flexible and customizable content containers with a variety of options.",
      },
    },
  },
};

export const textarea = ({ children, ...args }) => (
  <Textarea {...args} />
);

textarea.args = {
  name: "example",
  placeholder: "Your full name",
  disabled: false,
  style: null,
  value: "Textarea value",
};
