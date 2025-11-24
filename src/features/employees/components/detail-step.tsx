import { Label } from "@/components/ui/form";
import { Grid, GridItem } from "@/components/ui/grid";
import { DepartmentAutocomplete } from "./department-autocomplete";
import { withForm } from "@/forms";
import { formOpts } from "../data/shared-form";
import { EmployeeIdField } from "./employee-id-field";

export const DetailStep = withForm({
  ...formOpts,
  render: function Render({ form }) {
    return (
      <div>
        <Grid cols={2}>
          <GridItem>
            <form.AppField
              name="full_name"
              children={(field) => (
                <field.TextField label="Full Name" type="text" required />
              )}
            />
          </GridItem>

          <GridItem>
            <form.AppField
              name="email"
              children={(field) => (
                <field.TextField label="Email" type="email" required />
              )}
            />
          </GridItem>

          <GridItem>
            <Label htmlFor="department">Department</Label>
            <DepartmentAutocomplete />
          </GridItem>

          <GridItem>
            <form.AppField
              name="role"
              children={(field) => (
                <field.SelectField
                  label="Role"
                  placeholder="Select Role"
                  options={["Ops", "Admin", "Engineer", "Finance"]}
                  required
                />
              )}
            />
          </GridItem>

          <GridItem>
            <EmployeeIdField form={form} />
          </GridItem>
        </Grid>
      </div>
    );
  },
});
