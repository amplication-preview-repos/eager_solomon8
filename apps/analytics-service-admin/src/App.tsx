import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VisitorList } from "./visitor/VisitorList";
import { VisitorCreate } from "./visitor/VisitorCreate";
import { VisitorEdit } from "./visitor/VisitorEdit";
import { VisitorShow } from "./visitor/VisitorShow";
import { BlogAnalyticsList } from "./blogAnalytics/BlogAnalyticsList";
import { BlogAnalyticsCreate } from "./blogAnalytics/BlogAnalyticsCreate";
import { BlogAnalyticsEdit } from "./blogAnalytics/BlogAnalyticsEdit";
import { BlogAnalyticsShow } from "./blogAnalytics/BlogAnalyticsShow";
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
        title={"Analytics Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Visitor"
          list={VisitorList}
          edit={VisitorEdit}
          create={VisitorCreate}
          show={VisitorShow}
        />
        <Resource
          name="BlogAnalytics"
          list={BlogAnalyticsList}
          edit={BlogAnalyticsEdit}
          create={BlogAnalyticsCreate}
          show={BlogAnalyticsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
