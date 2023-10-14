/* eslint-disable react/no-danger */

import PropTypes from 'prop-types';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';

import './stage.css';

const Stage = ({
  markdown,
}) => (
  <section
    className="stage"
    id="stage"
  >
    <h2>
      <FontAwesomeIcon icon={faSchool} />
      Jenjang Pendidikan
    </h2>
    <ul className="stage__list">
      {
        markdown.map((stage) => (
          <li key={stage.node.frontmatter.title}>
            {
              stage.node.frontmatter.title
              && <h3>{stage.node.frontmatter.title}</h3>
            }
            <div>
              {
                stage.node.frontmatter.image
                && (
                  <GatsbyImage
                    alt={stage.node.frontmatter.title}
                    className="stage__list-image"
                    image={stage.node.frontmatter.image.childImageSharp.gatsbyImageData}
                  />
                )
              }
              <div dangerouslySetInnerHTML={{ __html: stage.node.html }} />
            </div>
          </li>
        ))
      }
    </ul>
  </section>
);

Stage.propTypes = {
  markdown: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          image: PropTypes.shape({}),
          title: PropTypes.string,
        }),
        html: PropTypes.node,
      }),
    }),
  ).isRequired,
};

export default Stage;
