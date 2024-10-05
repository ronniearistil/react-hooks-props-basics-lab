import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { user } from "../data/user";
import About from "../components/About";

test("renders a <p> element with the bio from props", () => {
  render(<About bio="I made this" github={user.github} linkedin={user.linkedin} />);
  expect(screen.queryByText("I made this")).toBeInTheDocument();
});

test("does not render a <p> element if the bio is not included in props", () => {
  const { container } = render(<About github={user.github} linkedin={user.linkedin} />);
  expect(container.querySelector("p")).toBeNull();
});

test("does not render a <p> element if the bio is an empty string", () => {
  const { container } = render(<About bio="" github={user.github} linkedin={user.linkedin} />);
  expect(container.querySelector("p")).toBeNull();
});
