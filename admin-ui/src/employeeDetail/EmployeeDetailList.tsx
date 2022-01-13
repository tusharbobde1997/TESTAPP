import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EmployeeDetailList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Employee Details"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="EmpName" source="empName" />
        <TextField label="EmpSalary" source="empSalary" />
        <TextField label="ID" source="id" />
        <TextField label="Manager" source="manager" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
