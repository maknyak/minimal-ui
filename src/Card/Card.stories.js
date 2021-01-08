/* eslint-disable react/prop-types */
// Card.stories.js

import { Card, CardBody } from ".";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: "Cards are flexible and customizable content containers with a variety of options.",
      },
    },
  },
};

export const card = ({ children, ...args }) => (
  <Card {...args}>
    <CardBody>{children}</CardBody>
  </Card>
);

card.args = {
  children: "Basic Card",
  style: null,
};
