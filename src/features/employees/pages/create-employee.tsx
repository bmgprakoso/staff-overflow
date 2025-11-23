import { Route } from "@/routes/wizard";
import { BasicInfoStep } from "../components/basic-info-step";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";

export const CreateEmployee = () => {
  const { role } = Route.useSearch();
  const navigate = useNavigate();

  const onBack = () => {
    navigate({ to: "/" });
  };

  return (
    <div>
      <Button onClick={onBack}>Back</Button>
      <h2>{`Add ${role} Employee`}</h2>
      <BasicInfoStep />
    </div>
  );
};
