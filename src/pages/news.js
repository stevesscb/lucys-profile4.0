import * as React from 'react';
import Layout from '../components/layout';

import Article from '../components/article';

const NewsPage = () => {
  return (
    <>
      <Layout pageTitle='News'>
        <Article />
      </Layout>
    </>
  );
};

export default NewsPage;
