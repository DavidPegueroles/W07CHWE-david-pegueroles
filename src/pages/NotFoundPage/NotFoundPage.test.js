import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When it's rendered'", () => {
    test("Then it should display a heading text '404'", () => {
      render(
        <BrowserRouter>
          <NotFoundPage />
        </BrowserRouter>
      );

      const hedaing = screen.queryByRole("heading", { name: /404/i });

      expect(hedaing).toBeInTheDocument();
    });
  });

  test("Then it should render a link with the text 'home'", () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );

    const link = screen.queryByRole("link", { name: /home/i });

    expect(link).toBeInTheDocument();
  });
});
