import * as React from 'react';
import { Link } from 'gatsby';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/index'>Home</Link>
        </li>
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
