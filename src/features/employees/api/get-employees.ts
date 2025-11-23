import { queryOptions, useQuery } from "@tanstack/react-query";

import { api1, api2 } from "@/lib/api-client";
import type { QueryConfig } from "@/lib/react-query";
import type { BasicInfo, Employee } from "@/types/api";
import { apiRoutes } from "@/config/api-routes";
import { DefaultPage, DefaultPageSize } from "@/config/table";

export const getEmployees = async (
  page = DefaultPage,
  limit = DefaultPageSize,
  role?: string,
): Promise<Employee[]> => {
  const basicInfo = await api1.get(apiRoutes.basicInfo.list, {
    params: {
      _page: page,
      _limit: limit,
      ...(role && { role_like: role }),
    },
  });

  const employeeIds: string[] =
    basicInfo?.map((info: BasicInfo) => info.id) || [];

  const details = await api2.get(apiRoutes.details.list, {
    params: {
      ...(employeeIds.length > 0 && { employee_id: employeeIds }),
    },
  });

  return basicInfo?.map((info: BasicInfo, index: number) => ({
    ...info,
    ...details?.[index],
  }));
};

export const getEmployeesQueryOptions = ({
  page = DefaultPage,
  limit = DefaultPageSize,
  role,
}: { page?: number; limit?: number; role?: string } = {}) => {
  return queryOptions({
    queryKey: ["employees", { page, limit, role }],
    queryFn: () => getEmployees(page, limit, role),
  });
};

type UseEmployeesOptions = {
  page?: number;
  limit?: number;
  role?: string;
  queryConfig?: QueryConfig<typeof getEmployeesQueryOptions>;
};

export const useEmployees = ({
  page,
  limit,
  role,
  queryConfig,
}: UseEmployeesOptions) => {
  return useQuery({
    ...getEmployeesQueryOptions({ page, limit, role }),
    ...queryConfig,
  });
};
