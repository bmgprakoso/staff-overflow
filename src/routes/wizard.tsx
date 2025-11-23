import { isRole } from "@/config/role";
import { CreateEmployee } from "@/features/employees/pages/create-employee";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wizard")({
  component: CreateEmployee,
  validateSearch: (search) => {
    const { role } = search;

    // Default to admin if role is not provided or invalid
    const validatedRole = isRole(role as string) ? role : "admin";

    return {
      role: validatedRole,
    };
  },
});
