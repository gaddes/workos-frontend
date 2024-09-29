import { Link, useLocation } from "react-router-dom";
import { TabNav } from "@radix-ui/themes";
import { AppRoutes } from "../main.routes.tsx";

export const Nav = () => {
  const { pathname } = useLocation();

  return (
    <TabNav.Root mb="5">
      <TabNav.Link asChild active={pathname === AppRoutes.Users}>
        <Link to={AppRoutes.Users}>Users</Link>
      </TabNav.Link>
      <TabNav.Link asChild active={pathname === AppRoutes.Roles}>
        <Link to={AppRoutes.Roles}>Roles</Link>
      </TabNav.Link>
    </TabNav.Root>
  );
};
