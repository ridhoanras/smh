import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Kurikulum from './kurikulum';

const KurikulumContainer = () => {
  const query = useStaticQuery(
    graphql`
      query {
        markdown: markdownRemark(fileAbsolutePath: { regex: "/kurikulum.md/" }) {
          html
          frontmatter {
            image {
              childImageSharp {
                gatsbyImageData(
                  quality: 70,
                  placeholder: BLURRED,
                  width: 350,
                )
              }
            }
            title
          }
        }
      }
    `,
  );

  return (
    query.markdown
      ? (
        <Kurikulum
          html={query.markdown.html}
          image={query.markdown.frontmatter.image.childImageSharp.gatsbyImageData}
          title={query.markdown.frontmatter.title}
        />
      )
      : null
  );
};

export default KurikulumContainer;
