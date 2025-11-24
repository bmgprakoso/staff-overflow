import { useAppForm } from "@/forms";
import type { EmployeeSchema } from "../data/employee-schema";
import { formOpts } from "../data/shared-form";
import { BasicInfoStep } from "./basic-info-step";
import { DefaultPage, DefaultPageSize } from "@/config/table";
import { useEmployees } from "../api/get-employees";
import { useEffect, useState } from "react";
import { useStore } from "@tanstack/react-form";
import type { Role } from "@/config/role";
import { DetailStep } from "./detail-step";
import { Button } from "@/components/ui/button";

type Props = {
  as: Role; // The role of the user filling the form
  onSubmit: (values: EmployeeSchema) => void;
  defaultValues?: EmployeeSchema;
};

export const EmployeeForm = ({ as, defaultValues, onSubmit }: Props) => {
  const [step, setStep] = useState<number>(1);
  const maxStep = as === "admin" ? 2 : 1;
  const hasNextStep = step < maxStep;
  const hasPreviousStep = step > 1;

  const form = useAppForm({
    ...formOpts,
    ...(defaultValues && { defaultValues }),
    onSubmit: ({ value }) => {
      onSubmit(value);
    },
  });

  const role = useStore(form.store, (state) => state.values.role);

  const employeesQuery = useEmployees({
    page: DefaultPage,
    limit: DefaultPageSize,
    role,
  });

  const total = employeesQuery.data?.total || 0;

  // Set employee_id after total is fetched
  useEffect(() => {
    if (employeesQuery.isSuccess && total !== undefined && role) {
      // Get first 3 letters of role, capitalized
      const prefix = role.slice(0, 3).toUpperCase();
      const nextNumber = (total + 1).toString().padStart(3, "0");
      const newEmployeeId = `${prefix}-${nextNumber}`;

      form.setFieldValue("employee_id", newEmployeeId);
    }
  }, [employeesQuery.isSuccess, total, role, form]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      {step === 1 && <BasicInfoStep form={form} />}
      {step === 2 && <DetailStep form={form} />}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {hasPreviousStep && (
          <Button onClick={() => setStep(step - 1)} style={{ marginBottom: 0 }}>
            Previous
          </Button>
        )}
        {hasNextStep && (
          <Button onClick={() => setStep(step + 1)} style={{ marginBottom: 0 }}>
            Next
          </Button>
        )}
        {step === maxStep && (
          <form.AppForm>
            <form.SubmitButton label="Save" />
          </form.AppForm>
        )}
      </div>
    </form>
  );
};
