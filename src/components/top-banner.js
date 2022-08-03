import * as React from 'react';
import { Link } from 'gatsby';

const TopBanner = () => {
  return (
    <div>
      <div>
        <h1>Lucy Quaggin</h1>
        <h2>Journalist</h2>
      </div>
      <div>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </div>
    </div>
  );
};

export default TopBanner;
