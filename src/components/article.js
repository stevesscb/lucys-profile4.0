import * as React from 'react';
import * as classes from './article.module.scss';

const Article = () => {
  return (
    <div className={classes.container}>
      <h4 className={classes.header}>
        <a
          href='https://7news.com.au/news/christchurch-shooting/brenton-tarrant-sentenced-over-christchurch-mosque-attack-c-1269644'
          target='_blank'
          rel='noreferrer'
        >
          Brenton Tarrant sentenced over Christchurch mosque attack
        </a>
      </h4>
      <br />
      <p>
        Brenton Tarrant has been sentenced to life without parole in New Zealand
        over the 2019 Christchurch mosque attacks, the first time the sentence
        has been imposed in the country.
      </p>
      <p className={classes.byLine}>
        Lucy Quaggin and Ben McKay 7NEWS Published: 27/08/2020 Updated:
        Thursday, 27 August 2020 12:58 pm AEST
      </p>
    </div>
  );
};

export default Article;
