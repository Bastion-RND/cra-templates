import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders Edit text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Edit/i);
  expect(linkElement).toBeInTheDocument();
});
