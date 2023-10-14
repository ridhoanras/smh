/* eslint-disable react/no-danger */

import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';

import Link from '../link/link';
import Portrait from './portrait';

import './about.css';

const About = ({
  markdown,
}) => (
  <div className="about">
    <section>
      <header>
        <h1>
          About
        </h1>
        <FontAwesomeIcon icon={faSchool} size="2x" />
      </header>
      <ul className="about__list">
        {
          markdown.map((person) => (
            <li key={person.node.frontmatter.name}>
              <Portrait
                image={person.node.frontmatter.image}
                name={person.node.frontmatter.name}
              />
              <div>
                <h2>{person.node.frontmatter.name}</h2>
                {
                  person.node.frontmatter.title
                  && (
                    <h3>{person.node.frontmatter.title}</h3>
                  )
                }
                {
                  person.node.frontmatter.email
                  && (
                    <Link
                      className="person__list-email"
                      to={`mailto:${person.node.frontmatter.email}`}
                    >
                      {person.node.frontmatter.email}
                    </Link>
                  )
                }
                <div dangerouslySetInnerHTML={{ __html: person.node.html }} />
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  </div>
);

About.propTypes = {
  markdown: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          email: PropTypes.string,
          image: PropTypes.shape({}),
          name: PropTypes.string,
          title: PropTypes.string,
        }),
        html: PropTypes.node,
      }),
    }),
  ).isRequired,
};

export default About;
