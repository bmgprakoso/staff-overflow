import { withForm } from "@/forms";
import { formOpts } from "../data/shared-form";

export const EmployeeIdField = withForm({
  ...formOpts,
  render: function Render({ form }) {
    return (
      <form.AppField
        name="employee_id"
        children={(field) => (
          <field.TextField label="Employee ID" type="text" required disabled />
        )}
      />
    );
  },
});
