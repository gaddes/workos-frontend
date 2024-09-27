import { createBrowserRouter, Navigate } from "react-router-dom";

import { GlobalError } from "./pages/GlobalError.tsx";
import { Users } from "././pages/Admin/Users.tsx";
import { Roles } from "././pages/Admin/Roles.tsx";

enum AppRoutes {
  AdminUsers = "admin/users",
  AdminRoles = "admin/roles",
}

export const router = createBrowserRouter([
  {
    path: "/",
    // This root route could be a dashboard or something in future
    element: <Navigate to={AppRoutes.AdminUsers} />,
    errorElement: <GlobalError />,
  },
  {
    path: AppRoutes.AdminUsers,
    element: <Users />,
  },
  {
    path: AppRoutes.AdminRoles,
    element: <Roles />,
  },
]);
