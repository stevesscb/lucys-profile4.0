import * as React from 'react';
import * as classes from './layout.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import TopBanner from './top-banner';
import Footer from './footer';

import { Link } from 'gatsby';

const Layout = ({ pageTitle, children, indexTitle }) => {
  const currentLocation = window.location.pathname;

  return (
    <div id='top'>
      <title>
        Lucy Quaggin | {pageTitle} {indexTitle}
      </title>
      <Container>
        <TopBanner />
        <main className={classes.main}>
          {currentLocation === '/' ? (
            ''
          ) : (
            <Link className={classes.returnBtn} to='/'>
              Return
            </Link>
          )}
          <h1 className={classes.pageTitle}>{pageTitle}</h1>
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
        {/* <div className={classes.adminBtn}>
          <Link>Admin</Link>
        </div> */}
      </Container>
    </div>
  );
};

export default Layout;
