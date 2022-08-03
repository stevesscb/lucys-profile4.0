import * as React from 'react';

import Layout from '../components/layout';
import NavBar from '../components/nav-bar';

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <NavBar />
      <p>This is the index page!</p>
    </Layout>
  );
};

export default IndexPage;
