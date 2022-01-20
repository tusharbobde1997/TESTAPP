import { EmployeeDetail } from "../employeeDetail/EmployeeDetail";

export type ProjectManager = {
  createdAt: Date;
  employeeDetails?: Array<EmployeeDetail>;
  id: string;
  pmName: string;
  pmSalary: string | null;
  updatedAt: Date;
};
