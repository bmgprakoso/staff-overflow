import { EmployeesTable } from "../components/employees-table";
import { AddEmployeeButton } from "../components/add-employee-button";

export const EmployeesList = () => {
  return (
    <>
      <AddEmployeeButton />
      <EmployeesTable />
    </>
  );
};
