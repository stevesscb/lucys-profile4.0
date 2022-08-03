import * as React from 'react';
import { Link } from 'gatsby';

import * as classes from './top-banner.module.css';

const TopBanner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h1>LUCY QUAGGIN</h1>
        <h4>JOURNALIST</h4>
      </div>
      <div className={classes.link}>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </div>
    </div>
  );
};

export default TopBanner;
