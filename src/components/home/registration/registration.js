/* eslint-disable react/no-danger */

import PropTypes from 'prop-types';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilSquare } from '@fortawesome/free-solid-svg-icons';

import './registration.css';

const Registration = ({
  html,
}) => (
  <section
    className="registration"
    id="registration"
  >
    <h2>
      <FontAwesomeIcon icon={faPencilSquare} />
      Pendaftaran
    </h2>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </section>
);

Registration.propTypes = {
  html: PropTypes.node.isRequired,
};

export default Registration;
