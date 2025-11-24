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

  const employees = employeesQuery.data?.employees || [];
  const total = employeesQuery.data?.total || 0;

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
          {employees.map((employee) => (
            <tr key={employee.id}>
              <Td>{employee.full_name}</Td>
              <Td>{employee.department}</Td>
              <Td>{employee.role}</Td>
              <Td>{employee.office_location}</Td>
              <Td>{employee.photo}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        page={page}
        limit={limit}
        total={total}
        onChangePage={setPage}
        onChangeLimit={setLimit}
      />
    </div>
  );
};
