import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';

import './blog.css';
import BlogList from './list';

const Blog = ({ blog }) => (
  <div className="blog">
    <section>
      <header>
        <h1>
          Blog
        </h1>
        <FontAwesomeIcon icon={faBlog} size="2x" />
      </header>
      <BlogList blog={blog} />
    </section>
  </div>
);

Blog.propTypes = {
  blog: PropTypes.shape({}).isRequired,
};

export default Blog;
