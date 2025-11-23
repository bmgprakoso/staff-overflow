import { Label, Input } from "@/components/ui/form";
import { Grid, GridItem } from "@/components/ui/grid";
import { DepartmentAutocomplete } from "./department-autocomplete";

export const BasicInfoStep = () => {
  return (
    <div>
      <Grid cols={2}>
        <GridItem>
          <Label htmlFor="full_name">Full Name</Label>
          <Input id="full_name" type="text" />
        </GridItem>

        <GridItem>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
        </GridItem>

        <GridItem>
          <Label htmlFor="department">Department</Label>
          <DepartmentAutocomplete />
        </GridItem>

        <GridItem>
          <Label htmlFor="role">Role</Label>
          <Input id="role" type="text" />
        </GridItem>

        <GridItem>
          <Label htmlFor="employee_id">Employee ID</Label>
          <Input id="employee_id" type="text" disabled />
        </GridItem>
      </Grid>
    </div>
  );
};
