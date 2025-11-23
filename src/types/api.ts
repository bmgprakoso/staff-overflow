export type Department = {
  id: number;
  name: string;
};

export type BasicInfo = {
  id: string;
  full_name: string;
  email: string;
  department: string;
  role: string;
};

export type Details = {
  id: string;
  employee_id: string;
  photo?: string;
  employment_type?: string;
  office_location?: string;
  notes?: string;
};

export type Employee = {
  id: string;
  full_name: string;
  email: string;
  department: string;
  role: string;
  photo?: string;
  employment_type?: string;
  office_location?: string;
  notes?: string;
};
