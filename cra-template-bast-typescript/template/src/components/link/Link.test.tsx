import { render, screen } from "@testing-library/react";
import Link from "./Link";

test("renders google.com", () => {
  render(<Link href="https://google.com" title="google.com" />);
  const linkElement = screen.getByText(/google.com/i);
  expect(linkElement).toBeInTheDocument();
});
