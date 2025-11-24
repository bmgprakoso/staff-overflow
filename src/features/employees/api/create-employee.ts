import { useMutation } from "@tanstack/react-query";
import { api1, api2 } from "@/lib/api-client";
import type { MutationConfig } from "@/lib/react-query";
import type { EmployeeSchema } from "@/features/employees/data/employee-schema";
import { apiRoutes } from "@/config/api-routes";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const createEmployee = async ({ data }: { data: EmployeeSchema }) => {
  const { full_name, email, department, role, employee_id, ...details } = data;
  const basicInfo = { full_name, email, department, role, employee_id };

  const basicInfoResponse = await api1.post(apiRoutes.basicInfo.add, basicInfo);

  if (Object.keys(details).length > 0) {
    // Simulate delay by 3 seconds
    await delay(3000);

    const detailsResponse = await api2.post(apiRoutes.details.add, {
      employee_id,
      ...details,
    });

    return [basicInfoResponse, detailsResponse];
  }

  return [basicInfoResponse];
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
