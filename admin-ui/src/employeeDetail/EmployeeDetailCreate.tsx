import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProjectManagerTitle } from "../projectManager/ProjectManagerTitle";

export const EmployeeDetailCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="EmpName" source="empName" />
        <NumberInput step={1} label="EmpSalary" source="empSalary" />
        <ReferenceInput
          source="projectmanager.id"
          reference="ProjectManager"
          label="Project Manager"
        >
          <SelectInput optionText={ProjectManagerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
