import * as React from 'react';

import * as classes from './top-banner.module.scss';

const TopBanner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h1>LUCY QUAGGIN</h1>
        <h4>JOURNALIST</h4>
      </div>
    </div>
  );
};

export default TopBanner;
