/* eslint-disable react/prop-types */
// Input.stories.js

import { Input } from "./Input";

export default {
  title: "Components/Form/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: "Input are flexible and customizable content containers with a variety of options.",
      },
    },
  },
};

export const input = ({ children, ...args }) => (
  <Input {...args} />
);

input.args = {
  type: "text",
  name: "example",
  placeholder: "Your full name",
  disabled: false,
  style: null,
  // value: "Test value",
  // onChange: (value) => console.log(typeof value),
};
