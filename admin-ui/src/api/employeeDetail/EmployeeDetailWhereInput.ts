import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { ProjectManagerWhereUniqueInput } from "../projectManager/ProjectManagerWhereUniqueInput";

export type EmployeeDetailWhereInput = {
  empName?: StringFilter;
  empSalary?: IntFilter;
  id?: StringFilter;
  projectManager?: ProjectManagerWhereUniqueInput;
};
