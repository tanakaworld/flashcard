import { render, screen, fireEvent } from "@testing-library/react";
import { Table } from "../Table";

test("renders children", () => {
  const columns = ["name", "age"];
  const data = [
    ["Mike", 30],
    ["Linda", 35],
  ];
  render(<Table data-testid="TestTable" columns={columns} data={data} />);
  const table = screen.getByTestId("TestTable");

  expect(table).toBeInTheDocument();
  expect(table).toHaveTextContent("Mike");
  expect(table).toHaveTextContent("Linda");
});
