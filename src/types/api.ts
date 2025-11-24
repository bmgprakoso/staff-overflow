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

export type Department = Entity<{
  id: number;
  name: string;
}>;

export type Location = Entity<{
  id: number;
  name: string;
}>;

export type BasicInfo = Entity<{
  id: string;
  employee_id: string;
  full_name: string;
  email: string;
  department: string;
  role: string;
}>;

// Resource Types
export type Details = Entity<{
  id: string;
  employee_id: string;
  photo?: string;
  employment_type?: string;
  office_location?: string;
  notes?: string;
}>;

export type Employee = Entity<{
  id: string;
  full_name: string;
  email: string;
  department: string;
  role: string;
  photo?: string;
  employment_type?: string;
  office_location?: string;
  notes?: string;
}>;

export type Employees = Entities<Employee, "employees">;
