import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import TopBanner from './top-banner';
import Footer from './footer';

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <Container>
        <TopBanner />
        <main>
          <h1>{pageTitle}</h1>
          {children}
        </main>
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
