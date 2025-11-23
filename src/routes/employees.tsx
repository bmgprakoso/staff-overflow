import { createFileRoute } from "@tanstack/react-router";
import { EmployeesList } from "@/features/employees/pages/employees-list";

export const Route = createFileRoute("/employees")({
  component: EmployeesList,
});
