import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ProjectManagerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="PMName" source="pmName" />
        <TextInput label="PMSalary" source="pmSalary" />
      </SimpleForm>
    </Edit>
  );
};
