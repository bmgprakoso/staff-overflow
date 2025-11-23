import { useAppForm } from "@/forms";
import type { EmployeeSchema } from "../data/employee-schema";
import { formOpts } from "../data/shared-form";
import { BasicInfoStep } from "./basic-info-step";

type Props = {
  onSubmit: (values: EmployeeSchema) => void;
  defaultValues?: EmployeeSchema;
};

export const EmployeeForm = ({ defaultValues, onSubmit }: Props) => {
  const form = useAppForm({
    ...formOpts,
    ...(defaultValues && { defaultValues }),
    onSubmit: ({ value }) => {
      onSubmit(value);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <BasicInfoStep form={form} />
    </form>
  );
};
