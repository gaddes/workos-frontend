import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Container, Flex } from "@radix-ui/themes";
import { Nav } from "./Nav.tsx";
import { AppRoutes } from "../main.routes.tsx";

export const Root = () => {
  const { pathname } = useLocation();

  if (pathname === AppRoutes.Root) return <Navigate to={AppRoutes.Users} />;

  return (
    <Container>
      <Flex direction="column">
        <Nav />
        <Outlet />
      </Flex>
    </Container>
  );
};
