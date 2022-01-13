import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ProjectManagerCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="PMName" source="pmName" />
        <TextInput label="PMSalary" source="pmSalary" />
      </SimpleForm>
    </Create>
  );
};
