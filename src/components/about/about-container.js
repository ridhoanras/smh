import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import About from './about';

import sortMarkdown from '../../utils/sort-markdown';

const AboutContainer = () => {
  const query = useStaticQuery(
    graphql`
      query {
        markdown: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
          edges {
            node {
              html
              frontmatter {
                email
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
                name
                title
                order
              }
            }
          }
        }
      }
    `,
  );

  const markdown = sortMarkdown(query.markdown.edges, ['order', 'name']);

  return (
    markdown.length > 0
      ? <About markdown={markdown} />
      : null
  );
};

export default AboutContainer;
