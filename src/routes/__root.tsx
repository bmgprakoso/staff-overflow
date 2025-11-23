import { Container } from "@/components/ui/container";
import { createRootRoute, Outlet } from "@tanstack/react-router";

const RootLayout = () => (
  <Container style={{ marginTop: "2.5rem" }}>
    <h1>Staff Overflow</h1>
    <hr />
    <Outlet />
  </Container>
);

export const Route = createRootRoute({ component: RootLayout });
