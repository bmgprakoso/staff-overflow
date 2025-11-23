import { Label, Input } from "@/components/ui/form";
import { Grid, GridItem } from "@/components/ui/grid";
import { useDepartments } from "../api/get-departments";

export const BasicInfoStep = () => {
  const departmentsQuery = useDepartments({
    page: 1,
    limit: 10,
  });

  const departments = departmentsQuery.data || [];
  console.log(departments);

  return (
    <div>
      <Grid cols={2}>
        <GridItem>
          <Label htmlFor="full_name">Full Senyum</Label>
          <Input id="full_name" type="text" />
        </GridItem>

        <GridItem>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
        </GridItem>

        <GridItem>
          <Label htmlFor="department">Department</Label>
          <Input id="department" type="text" />
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
