import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { render, screen } from "utils/test.tsx";

import { routes } from "../../main.routes.tsx";

describe("Roles", () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/roles"],
    initialIndex: 0,
  });

  it('renders "Roles" page', () => {
    render(<RouterProvider router={router} />);

    expect(screen.getByRole("link", { name: /users/i })).toBeVisible();
  });
});
