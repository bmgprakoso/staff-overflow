import { formOptions } from "@tanstack/react-form";
import { employeeSchema, type EmployeeSchema } from "./employee-schema";

export const defaultValues: EmployeeSchema = {
  full_name: "",
  email: "",
  department: "",
  role: "",
  id: "",
};

export const formOpts = formOptions({
  defaultValues,
  validators: {
    onChange: employeeSchema,
  },
});
