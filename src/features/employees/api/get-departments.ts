import { queryOptions, useQuery } from "@tanstack/react-query";

import { api1 } from "@/lib/api-client";
import type { QueryConfig } from "@/lib/react-query";
import type { Department } from "@/types/api";
import { apiRoutes } from "@/config/api-routes";
import { DefaultPage, DefaultPageSize } from "@/config/table";

export const getDepartments = (
  page = DefaultPage,
  limit = DefaultPageSize,
  q?: string,
): Promise<Department[]> => {
  return api1.get(apiRoutes.departments.list, {
    params: {
      _page: page,
      _limit: limit,
      ...(q && { name_like: q }),
    },
  });
};

export const getDepartmentsQueryOptions = ({
  page = DefaultPage,
  limit = DefaultPageSize,
  query,
}: { page?: number; limit?: number; query?: string } = {}) => {
  return queryOptions({
    queryKey: ["departments", { page, limit, query }],
    queryFn: () => getDepartments(page, limit, query),
  });
};

type UseDepartmentsOptions = {
  page?: number;
  limit?: number;
  query?: string;
  queryConfig?: QueryConfig<typeof getDepartmentsQueryOptions>;
};

export const useDepartments = ({
  page,
  limit,
  query,
  queryConfig,
}: UseDepartmentsOptions) => {
  return useQuery({
    ...getDepartmentsQueryOptions({ page, limit, query }),
    ...queryConfig,
  });
};
