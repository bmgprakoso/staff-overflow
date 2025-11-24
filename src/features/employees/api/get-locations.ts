import { queryOptions, useQuery } from "@tanstack/react-query";

import { api2 } from "@/lib/api-client";
import type { QueryConfig } from "@/lib/react-query";
import type { Location } from "@/types/api";
import { apiRoutes } from "@/config/api-routes";
import { DefaultPage, DefaultPageSize } from "@/config/table";

export const getLocations = async (
  page = DefaultPage,
  limit = DefaultPageSize,
  q?: string,
): Promise<Location[]> => {
  const response = await api2.get(apiRoutes.locations.list, {
    params: {
      _page: page,
      _limit: limit,
      ...(q && { name_like: q }),
    },
  });

  return response.data;
};

export const getLocationsQueryOptions = ({
  page = DefaultPage,
  limit = DefaultPageSize,
  query,
}: { page?: number; limit?: number; query?: string } = {}) => {
  return queryOptions({
    queryKey: ["locations", { page, limit, query }],
    queryFn: () => getLocations(page, limit, query),
  });
};

type UseLocationsOptions = {
  page?: number;
  limit?: number;
  query?: string;
  queryConfig?: QueryConfig<typeof getLocationsQueryOptions>;
};

export const useLocations = ({
  page,
  limit,
  query,
  queryConfig,
}: UseLocationsOptions) => {
  return useQuery({
    ...getLocationsQueryOptions({ page, limit, query }),
    ...queryConfig,
  });
};
