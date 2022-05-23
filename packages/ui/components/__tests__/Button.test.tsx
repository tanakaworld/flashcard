import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../Button";

test("renders children", () => {
  render(<Button data-testid="TestButton">my button</Button>);
  const button = screen.getByTestId("TestButton");

  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("my button");
});

test("fires click event", () => {
  const mockClick = jest.fn();
  render(
    <Button data-testid="TestButton" onClick={mockClick}>
      click!
    </Button>
  );
  const button = screen.getByTestId("TestButton");
  fireEvent.click(button);

  expect(mockClick).toBeCalled();
});
