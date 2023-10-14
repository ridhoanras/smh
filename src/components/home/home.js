import React from 'react';

import Kurikulum from './kurikulum/kurikulum-container';
import Contact from './contact/contact-container';
import Landing from './landing/landing-container';
import Registration from './registration/registration-container';
import Stage from './stage/stage-container';
import { GutterLeft, GutterRight } from './gutter/gutter';

import './home.css';

const Home = () => (
  <>
    <Landing />
    <div className="home__layout">
      <GutterLeft />
      <div className="home__inner">
        <Kurikulum />
        <Stage />
        <Registration />
        <Contact />
      </div>
      <GutterRight />
    </div>
  </>
);

export default Home;
