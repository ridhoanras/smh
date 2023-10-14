import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Registration from './registration';

const RegistrationContainer = () => {
  const query = useStaticQuery(
    graphql`
      query {
        markdown: markdownRemark(fileAbsolutePath: { regex: "/registration.md/" }) {
          html
        }
      }
    `,
  );

  return (
    query.markdown === null
    || query.markdown.html === ''
      ? null
      : <Registration html={query.markdown.html} />
  );
};

export default RegistrationContainer;
