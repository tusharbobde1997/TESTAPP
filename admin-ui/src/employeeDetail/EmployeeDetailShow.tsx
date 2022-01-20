import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PROJECTMANAGER_TITLE_FIELD } from "../projectManager/ProjectManagerTitle";

export const EmployeeDetailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
