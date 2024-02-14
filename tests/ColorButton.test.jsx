import { render, screen, fireEvent } from "@testing-library/react";
import ColorButton from "../src/ColorButton";
import { expect } from "vitest";

test("button test flow", () => {
  //render component
  render(<ColorButton />);

  //find heading and button with role and name
  const headingElement = screen.getByRole("heading");
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  //check color
  expect(headingElement).toHaveClass("red");

  //click button
  fireEvent.click(buttonElement);

  //check color after click
  expect(headingElement).toHaveClass("blue");

  //FOR YOUR SANITY, DO NOT TEST STYLES WITH VITEST
  //IT IS BUGGY, INSTEAD USE VISUAL TESTING
  //to check for color blue not just the class blue
  //prettier-ignore
  // expect(headingElement).toHaveStyle({ "background-color": "rgba(0,0,255,255)" });

  //check text after click
  expect(headingElement).toHaveTextContent(/blue/i);
  expect(buttonElement).toHaveTextContent(/red/i);
});

test("checkbox test flow", () => {
  render(<ColorButton />);

  //find button and checkbox with role and name
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", {
    id: /disable button/i,
  });

  //check initial state that the button is enabled and the checkbox is not checked
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  //simulate a click
  fireEvent.click(checkboxElement);

  //check button is disabled and checkbox is enabled after click
  expect(buttonElement).toBeDisabled();
  expect(checkboxElement).toBeChecked();
});
