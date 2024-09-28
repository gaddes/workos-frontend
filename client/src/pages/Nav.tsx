import { Link, useLocation } from "react-router-dom";
import { Container, TabNav } from "@radix-ui/themes";
import { AppRoutes } from "../main.routes.tsx";

export const Nav = () => {
  const { pathname } = useLocation();

  return (
    <Container mb="5">
      <TabNav.Root>
        <TabNav.Link asChild active={pathname === AppRoutes.Users}>
          <Link to={AppRoutes.Users}>Users</Link>
        </TabNav.Link>
        <TabNav.Link asChild active={pathname === AppRoutes.Roles}>
          <Link to={AppRoutes.Roles}>Roles</Link>
        </TabNav.Link>
      </TabNav.Root>
    </Container>
  );
};
