import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { waitFor } from "@testing-library/dom";

import { render, screen } from "utils/test.tsx";
import { routes } from "../../main.routes.tsx";
import { expect } from "vitest";

describe("Users page", () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/users"],
    initialIndex: 0,
  });

  it("renders nav bar & search box", () => {
    render(<RouterProvider router={router} />);

    expect(screen.getByRole("link", { name: /users/i })).toBeVisible();
    expect(screen.getByRole("link", { name: /roles/i })).toBeVisible();

    expect(screen.getByRole("textbox")).toBeVisible();
    expect(screen.getByPlaceholderText(/search by name\.\.\./i)).toBeVisible();
  });

  it("renders loading skeleton with accessible label", () => {
    render(<RouterProvider router={router} />);

    expect(screen.getByLabelText(/loading users table/i)).toBeVisible();
  });

  it("renders data when loaded", async () => {
    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(
        screen.getByRole("rowheader", { name: /terry graf/i }),
      ).toBeVisible();

      screen.getAllByRole("cell", { name: /engineering/i }).map((cell) => {
        expect(cell).toBeVisible();
      });

      expect(screen.getByRole("cell", { name: /Jul 29, 2024/i })).toBeVisible();
    });
  });

  it("renders buttons in table footer", async () => {
    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /previous/i })).toBeDisabled();
      expect(screen.getByRole("button", { name: /next/i })).toBeEnabled();
    });
  });
});
