import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProjectManagerTitle } from "../projectManager/ProjectManagerTitle";

export const EmployeeDetailEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
