import { requiredString, emailValidator } from "@/lib/validation/validators";
import * as v from "valibot";

export const employeeSchema = v.object({
  full_name: requiredString,
  email: emailValidator,
  department: requiredString,
  role: requiredString,
  id: requiredString,
  photo: v.optional(v.string()),
  employment_type: v.optional(v.string()),
  office_location: v.optional(v.string()),
  notes: v.optional(v.string()),
});

export type EmployeeSchema = v.InferOutput<typeof employeeSchema>;
