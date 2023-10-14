import React from 'react';

import Layout from '../../components/layout/layout';
import Blog from '../../components/blog/blog-container';
import SEO from '../../components/seo/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Blog />
  </Layout>
);

export default IndexPage;
