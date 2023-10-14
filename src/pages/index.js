import React from 'react';

import Home from '../components/home/home';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';

import { Container, Tabel } from 'react-bootstrap'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <container></container>
    <Home />    
  </Layout>
);

export default IndexPage;
