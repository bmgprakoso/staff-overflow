import { Route } from "@/routes/wizard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { EmployeeForm } from "../components/employee-form";
import type { EmployeeSchema } from "../data/employee-schema";
import { useCreateEmployee } from "../api/create-employee";
import type { Role } from "@/config/role";

export const CreateEmployee = () => {
  const { role } = Route.useSearch();
  const navigate = useNavigate();
  const createProductMutation = useCreateEmployee({});

  const onSubmit = (values: EmployeeSchema) => {
    createProductMutation.mutate(
      { data: values },
      {
        onSuccess: () => {
          navigate({ to: "/" });
        },
      },
    );
  };

  const onBack = () => {
    navigate({ to: "/" });
  };

  return (
    <div>
      <Button onClick={onBack}>Back</Button>
      <h2>Add Employee</h2>
      <EmployeeForm as={role as Role} onSubmit={onSubmit} />
    </div>
  );
};
