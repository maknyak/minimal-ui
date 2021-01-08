// Button.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Card, CardBody } from ".";

describe("Card", () => {
  it("Card Basic", () => {
    render(<Card>Card Basic</Card>);
    expect(screen.getByText("Card Basic")).toBeInTheDocument();
  });

  it("Card Body", () => {
    render(
      <Card>
        <CardBody>
          Card Body
        </CardBody>
      </Card>,
    );
    expect(screen.getByText("Card Body")).toBeInTheDocument();
  });
});
