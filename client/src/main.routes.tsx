import { createBrowserRouter } from "react-router-dom";

import { GlobalError } from "./pages/GlobalError.tsx";
import { Root } from "./pages/Root.tsx";
import { Users } from "./pages/Users/Users.tsx";
import { Roles } from "./pages/Roles/Roles.tsx";

export enum AppRoutes {
  Root = "/",
  Users = "/users",
  Roles = "/roles",
}

export const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <GlobalError />,
    children: [
      {
        path: AppRoutes.Users,
        element: <Users />,
      },
      {
        path: AppRoutes.Roles,
        element: <Roles />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
