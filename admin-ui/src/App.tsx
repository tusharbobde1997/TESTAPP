import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { EmployeeDetailList } from "./employeeDetail/EmployeeDetailList";
import { EmployeeDetailCreate } from "./employeeDetail/EmployeeDetailCreate";
import { EmployeeDetailEdit } from "./employeeDetail/EmployeeDetailEdit";
import { EmployeeDetailShow } from "./employeeDetail/EmployeeDetailShow";
import { ProjectManagerList } from "./projectManager/ProjectManagerList";
import { ProjectManagerCreate } from "./projectManager/ProjectManagerCreate";
import { ProjectManagerEdit } from "./projectManager/ProjectManagerEdit";
import { ProjectManagerShow } from "./projectManager/ProjectManagerShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Business"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="EmployeeDetail"
          list={EmployeeDetailList}
          edit={EmployeeDetailEdit}
          create={EmployeeDetailCreate}
          show={EmployeeDetailShow}
        />
        <Resource
          name="ProjectManager"
          list={ProjectManagerList}
          edit={ProjectManagerEdit}
          create={ProjectManagerCreate}
          show={ProjectManagerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
