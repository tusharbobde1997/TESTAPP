import { EmployeeDetail as TEmployeeDetail } from "../api/employeeDetail/EmployeeDetail";

export const EMPLOYEEDETAIL_TITLE_FIELD = "empName";

export const EmployeeDetailTitle = (record: TEmployeeDetail): string => {
  return record.empName || record.id;
};
