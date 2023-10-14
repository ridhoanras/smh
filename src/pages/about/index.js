import React from 'react';

import Layout from '../../components/layout/layout';
import About from '../../components/about/about-container';
import SEO from '../../components/seo/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <About />
  </Layout>
);

export default IndexPage;
