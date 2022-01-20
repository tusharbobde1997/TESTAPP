import { ProjectManagerWhereUniqueInput } from "../projectManager/ProjectManagerWhereUniqueInput";

export type EmployeeDetailCreateInput = {
  empName: string;
  empSalary: number;
  projectManager?: ProjectManagerWhereUniqueInput | null;
};
