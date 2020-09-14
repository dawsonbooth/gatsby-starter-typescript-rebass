import * as React from "react";

import { Heading, Text } from "rebass";

import StaticLink from "../components/StaticLink";
import Layout from "../components/Layout";

const SecondPage = () => (
  <Layout>
    <Heading>Hi from the second page</Heading>
    <Text>Welcome to page 2</Text>
    <StaticLink to="/">Go back to the home page</StaticLink>
  </Layout>
);

export default SecondPage;
