import { EmployeeDetailWhereInput } from "./EmployeeDetailWhereInput";
import { EmployeeDetailOrderByInput } from "./EmployeeDetailOrderByInput";

export type EmployeeDetailFindManyArgs = {
  where?: EmployeeDetailWhereInput;
  orderBy?: EmployeeDetailOrderByInput;
  skip?: number;
  take?: number;
};
