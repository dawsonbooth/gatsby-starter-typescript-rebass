import * as React from "react";

import { Heading, Text } from "rebass";

import StaticLink from "../components/StaticLink";
import Layout from "../components/Layout";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export default function ({ data }: IndexPageProps) {
  return (
    <Layout>
      <Heading>Hello world!</Heading>
      <Text>
        Welcome to my new <strong>{data.site.siteMetadata.title}</strong>.
      </Text>
      <StaticLink to="/page-2/">Go to page 2</StaticLink>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
