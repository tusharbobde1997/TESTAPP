import { ProjectManager } from "../projectManager/ProjectManager";

export type EmployeeDetail = {
  createdAt: Date;
  empName: string;
  empSalary: number;
  id: string;
  projectManager?: ProjectManager | null;
  updatedAt: Date;
};
