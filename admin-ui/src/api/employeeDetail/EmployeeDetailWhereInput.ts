import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EmployeeDetailWhereInput = {
  empName?: StringFilter;
  empSalary?: IntFilter;
  id?: StringFilter;
  manager?: StringNullableFilter;
};
