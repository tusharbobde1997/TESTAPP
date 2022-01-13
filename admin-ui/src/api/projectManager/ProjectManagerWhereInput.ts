import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProjectManagerWhereInput = {
  id?: StringFilter;
  pmName?: StringFilter;
  pmSalary?: StringNullableFilter;
};
