const crudRoutes = (resource: string) => {
  return {
    list: `/${resource}`, // GET list
    add: `/${resource}`, // POST create
    detail: (id: string | number) => `/${resource}/${id}`, // GET, PUT, DELETE
  } as const;
};

export const apiRoutes = {
  departments: crudRoutes("departments"),
} as const;
