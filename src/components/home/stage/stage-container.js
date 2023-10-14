import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Stage from './stage';

import sortMarkdown from '../../../utils/sort-markdown';

const StageContainer = () => {
  const query = useStaticQuery(
    graphql`
      query {
        markdown: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/stage/" } }) {
          edges {
            node {
              html
              frontmatter {
                image {
                  childImageSharp {
                    gatsbyImageData(
                      quality: 70,
                      placeholder: BLURRED,
                      height: 300,
                      width: 300,
                    )
                  }
                }
                title
                order
              }
            }
          }
        }
      }
    `,
  );

  const markdown = sortMarkdown(query.markdown.edges, ['order', 'title']);

  return (
    markdown.length > 0
      ? <Stage markdown={markdown} />
      : null
  );
};

export default StageContainer;
