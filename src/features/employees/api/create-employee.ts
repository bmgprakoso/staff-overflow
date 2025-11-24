import { useMutation } from "@tanstack/react-query";
import { api1, api2 } from "@/lib/api-client";
import type { MutationConfig } from "@/lib/react-query";
import type { EmployeeSchema } from "@/features/employees/data/employee-schema";
import { apiRoutes } from "@/config/api-routes";

export const createEmployee = ({ data }: { data: EmployeeSchema }) => {
  const { full_name, email, department, role, employee_id, ...details } = data;
  const basicInfo = { full_name, email, department, role, employee_id };
  const apiCalls = [api1.post(apiRoutes.basicInfo.add, basicInfo)];

  // Only add details API call if there are any details to send
  if (Object.keys(details).length > 0) {
    apiCalls.push(
      api2.post(apiRoutes.details.add, { employee_id, ...details }),
    );
  }

  return Promise.all(apiCalls);
};

type UseCreateEmployeeOptions = {
  mutationConfig?: MutationConfig<typeof createEmployee>;
};

export const useCreateEmployee = ({
  mutationConfig,
}: UseCreateEmployeeOptions) => {
  return useMutation({
    ...mutationConfig,
    mutationFn: createEmployee,
  });
};
