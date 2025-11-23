import { Route } from "@/routes/wizard";

export const CreateEmployee = () => {
  const { role } = Route.useSearch();

  return <div>{`Create ${role} Employee`}</div>;
};
