import * as React from "react";

import { Link, LinkProps as RebassLinkProps } from "rebass";
import GatsbyLink, { GatsbyLinkProps } from "gatsby-link";

export default (props: RebassLinkProps & GatsbyLinkProps<object>) => (
  <Link as={GatsbyLink} {...props} />
);
