import { requiredString, emailValidator } from "@/lib/validation/validators";
import * as v from "valibot";

const optionSchema = v.object({
  id: v.number(),
  name: v.string(),
});

export const employeeSchema = v.object({
  full_name: requiredString,
  email: emailValidator,
  department: v.nullable(optionSchema),
  role: requiredString,
  employee_id: requiredString,
  photo: v.optional(v.string()),
  employment_type: v.optional(v.string()),
  office_location: v.optional(optionSchema),
  notes: v.optional(v.string()),
});

export type EmployeeSchema = v.InferOutput<typeof employeeSchema>;
