import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const EmployeeDetailEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="EmpName" source="empName" />
        <NumberInput step={1} label="EmpSalary" source="empSalary" />
        <TextInput label="Manager" source="manager" />
      </SimpleForm>
    </Edit>
  );
};
