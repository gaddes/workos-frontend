import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { waitFor } from "@testing-library/dom";

import { render, screen } from "utils/test.tsx";
import { routes } from "../../main.routes.tsx";

describe("Roles page", () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/roles"],
    initialIndex: 0,
  });

  it("renders nav bar & search box", () => {
    render(<RouterProvider router={router} />);

    expect(screen.getByRole("link", { name: /users/i })).toBeVisible();
    expect(screen.getByRole("link", { name: /roles/i })).toBeVisible();

    expect(screen.getByRole("textbox")).toBeVisible();
    expect(screen.getByPlaceholderText(/search by role\.\.\./i)).toBeVisible();
  });

  it("renders loading skeleton with accessible label", () => {
    render(<RouterProvider router={router} />);

    expect(screen.getByLabelText(/loading roles table/i)).toBeVisible();
  });

  it("renders data when loaded", async () => {
    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(
        screen.getByRole("rowheader", { name: /engineering/i }),
      ).toBeVisible();

      expect(
        screen.getByRole("cell", {
          name: /engineers build and maintain the software that powers our products and services\./i,
        }),
      ).toBeVisible();
    });
  });
});
