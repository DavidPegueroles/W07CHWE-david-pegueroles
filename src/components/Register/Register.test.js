import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../setupTests";
import Register from "./Register";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a Register component", () => {
  describe("When a user types in the name, username and password fields", () => {
    test("Then the input value should be what the user typed", () => {
      const nameType = "Luis";
      const usernameType = "luis";
      const passwordType = "Admin123";

      renderWithProviders(<Register />);

      const name = screen.getByPlaceholderText(/super mario/i);
      const username = screen.getByPlaceholderText(/supermario/i);
      const password = screen.getByPlaceholderText(/password.../i);

      userEvent.type(name, nameType);
      userEvent.type(username, usernameType);
      userEvent.type(password, passwordType);

      expect(name).toHaveValue(nameType);
      expect(username).toHaveValue(usernameType);
      expect(password).toHaveValue(passwordType);
    });
  });

  describe("When the user has not yet introduced a value in the three fields", () => {
    test("Then the submit button should be disabled", () => {
      renderWithProviders(<Register />);

      const submitButton = screen.getByRole("button", { name: /register/i });

      expect(submitButton).toBeDisabled();
    });
  });

  describe("When the user has already introduced a value in the three fields", () => {
    test("Then the submit button should not be disabled", () => {
      const nameType = "Luis";
      const usernameType = "luis";
      const passwordType = "Admin123";

      renderWithProviders(<Register />);

      const name = screen.getByPlaceholderText(/super mario/i);
      const username = screen.getByPlaceholderText(/supermario/i);
      const password = screen.getByPlaceholderText(/password.../i);

      userEvent.type(name, nameType);
      userEvent.type(username, usernameType);
      userEvent.type(password, passwordType);

      const submitButton = screen.getByRole("button", { name: /register/i });

      expect(submitButton).not.toBeDisabled();
    });

    test("Then the user could click the submit button", () => {
      const nameType = "Luis";
      const usernameType = "luis";
      const passwordType = "Admin123";

      renderWithProviders(<Register />);

      const name = screen.getByPlaceholderText(/super mario/i);
      const username = screen.getByPlaceholderText(/supermario/i);
      const password = screen.getByPlaceholderText(/password.../i);
      const submitButton = screen.getByRole("button", { name: /register/i });

      userEvent.type(name, nameType);
      userEvent.type(username, usernameType);
      userEvent.type(password, passwordType);

      userEvent.click(submitButton);
    });
  });
});
