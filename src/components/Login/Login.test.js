import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../../setupTests";
import Login from "./Login";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a Login component", () => {
  describe("When a user types in the username and password fields", () => {
    test("Then the input value should be what the user typed", () => {
      const usernameType = "luis";
      const passwordType = "Admin123";

      renderWithProviders(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      );
      const username = screen.getByPlaceholderText(/supermario/i);
      const password = screen.getByPlaceholderText(/password.../i);

      userEvent.type(username, usernameType);
      userEvent.type(password, passwordType);

      expect(username).toHaveValue(usernameType);
      expect(password).toHaveValue(passwordType);
    });
  });

  describe("When the user has not yet introduced a value in both fields", () => {
    test("Then the submit button should be disabled", () => {
      renderWithProviders(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      );
      const submitButton = screen.getByRole("button", { name: /login/i });

      expect(submitButton).toBeDisabled();
    });
  });

  describe("When the user has already introduced a value in both fields", () => {
    test("Then the submit button should not be disabled", () => {
      const usernameType = "luis";
      const passwordType = "Admin123";

      renderWithProviders(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      );
      const username = screen.getByPlaceholderText(/supermario/i);
      const password = screen.getByPlaceholderText(/password.../i);

      userEvent.type(username, usernameType);
      userEvent.type(password, passwordType);

      const submitButton = screen.getByRole("button", { name: /login/i });

      expect(submitButton).not.toBeDisabled();
    });

    test("Then the user could click the submit button", () => {
      const usernameType = "luis";
      const passwordType = "Admin123";

      renderWithProviders(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      );

      const username = screen.getByPlaceholderText(/supermario/i);
      const password = screen.getByPlaceholderText(/password.../i);
      const submitButton = screen.getByRole("button", { name: /login/i });

      userEvent.type(username, usernameType);
      userEvent.type(password, passwordType);

      userEvent.click(submitButton);
    });
  });
});
