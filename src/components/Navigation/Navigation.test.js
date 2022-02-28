import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should display links with 'Home' 'My Bar' and 'Create My Cocktail' as text", () => {
      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );

      const navigationHome = screen.getByRole("link", { name: /home/i });
      const navigationMyBar = screen.getByRole("link", {
        name: "Register/Login",
      });

      expect(navigationHome).toBeInTheDocument();
      expect(navigationMyBar).toBeInTheDocument();
    });
  });
});
