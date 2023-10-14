import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faSchool } from '@fortawesome/free-solid-svg-icons';

import Link from '../../../link/link';

const getLinks = (links) => {
  const linkComponents = {
    about: (
      <Link key="about" to="/about">
        <FontAwesomeIcon icon={faSchool} />
        About
      </Link>
    ),
    blog: (
      <Link key="blog" to="/blog">
        <FontAwesomeIcon icon={faBlog} />
        Blog
      </Link>
    ),
  };

  return (
    <>
      {links.map((link) => linkComponents[link])}
    </>
  );
};

export default getLinks;
