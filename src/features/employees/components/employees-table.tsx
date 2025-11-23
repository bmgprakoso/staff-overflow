import { Table, Th, Td, Pagination } from "@/components/ui/table";
import { DefaultPage, DefaultPageSize } from "@/config/table";
import { useState } from "react";
import { useEmployees } from "../api/get-employees";

export const EmployeesTable = () => {
  const [page, setPage] = useState(DefaultPage);
  const [limit, setLimit] = useState(DefaultPageSize);

  const employeesQuery = useEmployees({
    page,
    limit,
  });

  const employees = employeesQuery.data || [];
  console.log(employees);

  const totalRows = 48; // example

  return (
    <div>
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
      <Pagination
        page={page}
        limit={limit}
        total={totalRows}
        onChangePage={setPage}
        onChangeLimit={setLimit}
      />
    </div>
  );
};
