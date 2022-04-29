import { render, screen } from "@testing-library/react";

import Demo from "./Demo";

test("renders Edit text", () => {
  render(<Demo />);
  const linkElement = screen.getByText(/Edit/i);
  expect(linkElement).toBeInTheDocument();
});
