/* eslint-disable react/prop-types */
// Input.stories.js

import { Select } from "./Select";

export default {
  title: "Components/Form/Select",
  component: Select,
  parameters: {
    docs: {
      description: {
        component: "Input are flexible and customizable content containers with a variety of options.",
      },
    },
  },
};

export const select = ({ children, ...args }) => (
  <Select {...args} />
);

const options = [
  { value: 0, label: "Pilih", description: "" },
  { value: 1, label: "Admin", description: "All Privillage" },
  { value: 2, label: "Editor", description: "Can Edit" },
  { value: 3, label: "Viewer", description: "Can View" },
];

select.args = {
  name: "example",
  placeholder: "Your full name",
  disabled: false,
  style: null,
  options,
  asObject: true,
  loading: false,
  selected: 1,
  onChange: (value) => console.log(value),
  onBlur: (value) => console.log(value),
};
