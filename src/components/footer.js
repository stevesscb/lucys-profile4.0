import * as React from 'react';
import * as classes from './footer.module.css';

import LinkedIn from '/src/images/linkedIn.png';
import Email from '/src/images/email.png';
import Twitter from '/src/images/twitter.png';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <a
        href='https://au.linkedin.com/in/lucy-quaggin'
        target='_blank'
        rel='noreferrer'
      >
        <img src={LinkedIn} alt=' linkedIn logo' />
      </a>
      <a
        href='mailto:lucy.m.quaggin@hotmail.com'
        target='_blank'
        rel='noreferrer'
      >
        <img src={Email} alt='Email logo' />
      </a>
      <a
        href='https://twitter.com/lucyquaggin?lang=en'
        target='_blank'
        rel='noreferrer'
      >
        <img src={Twitter} alt='Twitter logo' />
      </a>
    </div>
  );
};

export default Footer;
