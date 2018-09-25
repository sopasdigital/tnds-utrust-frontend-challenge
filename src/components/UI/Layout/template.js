import React from "react";

import { Layout, Main, Header } from "../Layout";
import SearchBar from "../../../containers/SearchBar";

const Template = props => (
  <Layout>
    <Header>
      <SearchBar />
    </Header>
    <Main>{props.children}</Main>
  </Layout>
);

export default Template;
