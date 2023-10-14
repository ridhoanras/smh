/* eslint-disable react/no-danger */

import PropTypes from 'prop-types';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import './kurikulum.css';

const Kurikulum = ({
  html,
  image,
  title,
}) => (
  <section className="kurikulum">
    <h2>{title}</h2>
    <div className="kurikulum__inner">
      <GatsbyImage
        alt={title}
        className="kurikulum__portrait"
        image={image}
      />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </section>
);

Kurikulum.propTypes = {
  html: PropTypes.node.isRequired,
  image: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
};

export default Kurikulum;
