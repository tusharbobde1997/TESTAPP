export type EmployeeDetailCreateInput = {
  empName: string;
  empSalary: number;
  manager?: string | null;
};
