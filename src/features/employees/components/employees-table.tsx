import { Table, Th, Td } from "@/components/ui/table";

export const EmployeesTable = () => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Department</Th>
          <Th>Role</Th>
          <Th>Location</Th>
          <Th>Photo</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>Dave Gamache</Td>
          <Td>Lending</Td>
          <Td>Admin</Td>
          <Td>Jakarta</Td>
          <Td>Photo</Td>
        </tr>
      </tbody>
    </Table>
  );
};
