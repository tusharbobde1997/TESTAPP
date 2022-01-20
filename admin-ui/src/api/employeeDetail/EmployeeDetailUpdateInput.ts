import { ProjectManagerWhereUniqueInput } from "../projectManager/ProjectManagerWhereUniqueInput";

export type EmployeeDetailUpdateInput = {
  empName?: string;
  empSalary?: number;
  projectManager?: ProjectManagerWhereUniqueInput | null;
};
