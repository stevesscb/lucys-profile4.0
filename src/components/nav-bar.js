import * as React from 'react';
import * as classes from './nav-bar.module.scss';

import { Link } from 'gatsby';

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to='/news'>News</Link>
        </li>
        <li>
          <Link to='/reviews'>Reviews</Link>
        </li>
        <li>
          <Link to='/features'>Features</Link>
        </li>
        <li>
          <Link to='/resume'>Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
