import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const EmployeeDetailCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="EmpName" source="empName" />
        <NumberInput step={1} label="EmpSalary" source="empSalary" />
        <TextInput label="Manager" source="manager" />
      </SimpleForm>
    </Create>
  );
};
