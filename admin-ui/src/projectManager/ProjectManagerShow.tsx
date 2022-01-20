import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PROJECTMANAGER_TITLE_FIELD } from "./ProjectManagerTitle";

export const ProjectManagerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="PMName" source="pmName" />
        <TextField label="PMSalary" source="pmSalary" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="EmployeeDetail"
          target="ProjectManagerId"
          label="Employee Details"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="EmpName" source="empName" />
            <TextField label="EmpSalary" source="empSalary" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Project Manager"
              source="projectmanager.id"
              reference="ProjectManager"
            >
              <TextField source={PROJECTMANAGER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
