// Base Entity
export type BaseEntity = {
  id: number;
};

export type Entity<T> = {
  [K in keyof T]: T[K];
} & BaseEntity;

export type PaginationMeta = {
  page: number;
  total: number;
};

export type Entities<T, K extends string> = {
  [key in K]: Entity<T>[];
} & PaginationMeta;

// Resource Types
export type Department = Entity<{
  name: string;
}>;

export type Location = Entity<{
  name: string;
}>;

export type BasicInfo = Entity<{
  employee_id: string;
  full_name: string;
  email: string;
  department: Department;
  role: string;
}>;

export type Details = Entity<{
  employee_id: string;
  photo?: string;
  employment_type?: string;
  office_location?: Location;
  notes?: string;
}>;

export type Employee = Entity<{
  full_name: string;
  email: string;
  department: Department;
  role: string;
  photo?: string;
  employment_type?: string;
  office_location?: Location;
  notes?: string;
}>;

export type Employees = Entities<Employee, "employees">;
