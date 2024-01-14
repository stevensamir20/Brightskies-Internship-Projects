import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Login } from "./Login";

const onSubmit = jest.fn();

describe("Test the Login Component", () => {
  test("email input should have type email", () => {
    render(<Login />);
    const email = screen.getByPlaceholderText("Enter email");
    expect(email).toHaveAttribute("type", "email");
  });

  test("password input should have type password", () => {
    render(<Login />);
    const password = screen.getByPlaceholderText("Password");
    expect(password).toHaveAttribute("type", "password");
  });

  test("should be able to reset the form", () => {
    const { getByLabelText, getByTestId } = render(<Login />);
    const resetBtn = getByTestId("reset");
    const emailInputNode = getByLabelText("Email");
    const passwordInputNode = getByLabelText("Password");
    fireEvent.change(emailInputNode, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInputNode, { target: { value: "test123" } });
    fireEvent.click(resetBtn);
    expect(emailInputNode.value).toMatch("");
    expect(passwordInputNode.value).toMatch("");
  });

  test("should be able to submit the form", () => {
    const { getByPlaceholderText, getByTestId } = render(<Login />);
    const email = getByPlaceholderText("Enter email");
    const password = getByPlaceholderText("Password");
    const submitBtn = getByTestId("submit");

    userEvent.type(email, "dipesh@gmail.com");
    userEvent.type(password, "123456");
    fireEvent.click(submitBtn);

    expect(email.value).toBe("");
    expect(password.value).toBe("");
  });
});
