import * as React from 'react';
import * as classes from './layout.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import TopBanner from './top-banner';
import Footer from './footer';

import { Link } from 'gatsby';

const Layout = ({ pageTitle, children }) => {
  const currentLocation = window.location.pathname;

  return (
    <div id='top'>
      <title>Lucy Quaggin | Professional Portfolio</title>
      <Container>
        <TopBanner />
        <main className={classes.main}>
          {currentLocation === '/' ? (
            ''
          ) : (
            <Link className={classes.top} to='/'>
              Return
            </Link>
          )}
          <h1>{pageTitle}</h1>
          {children}
          {currentLocation === '/' ? (
            ''
          ) : (
            <a className={classes.top} id='top' href='#top'>
              back to top
            </a>
          )}
        </main>
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
