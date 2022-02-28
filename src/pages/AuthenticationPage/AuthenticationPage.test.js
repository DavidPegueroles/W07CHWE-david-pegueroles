import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../setupTests";
import AuthenticationPage from "./AuthenticationPage";

describe("Given a AuthenticationPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should display links with 'Login' and 'Register' as text", () => {
      renderWithProviders(
        <BrowserRouter>
          <AuthenticationPage />
        </BrowserRouter>
      );

      const login = screen.getByRole("link", { name: /login/i });
      const register = screen.getByRole("link", { name: /register/i });

      expect(login).toBeInTheDocument();
      expect(register).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the user clikcs the Login button", () => {
    test("Then it should display a heading 'Insert your username and password'", async () => {
      renderWithProviders(
        <BrowserRouter>
          <AuthenticationPage />
        </BrowserRouter>
      );

      const login = screen.getByRole("link", { name: /login/i });

      userEvent.click(login);

      const headingText = await screen.findByRole("heading", {
        name: /insert your username and password/i,
      });

      expect(headingText).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the user clikcs the Register button", () => {
    test("Then it should display a heading 'Create an account'", async () => {
      renderWithProviders(
        <BrowserRouter>
          <AuthenticationPage />
        </BrowserRouter>
      );

      const register = screen.getByRole("link", { name: /register/i });

      userEvent.click(register);

      const headingText = await screen.findByRole("heading", {
        name: /create an account/i,
      });

      expect(headingText).toBeInTheDocument();
    });
  });
});
