import * as React from 'react';
import * as classes from './resume.module.scss';

const Resume = () => {
  return (
    <div className={classes.container}>
      <h4>Profile:</h4>
      <p>
        A passionate, highly motivated and committed media professional with
        experience in radio, television and online media. I like to work in a
        fast-paced environment and thrive on a challenge. I’m currently looking
        for a new opportunity that combines my unique skill set with my passion
        for news.
      </p>
      <h4>Experience:</h4>
      <strong>
        September 2019 – Current November to now <br /> Front Page Editor and
        Journalist, 7NEWS.com.au, Perth
      </strong>
      <p>
        I’m currently a Front Page Editor and Journalist at 7NEWS.com.au. In
        this role I assign stories, accept or reject pitches, manage the day’s
        content flow and make informed decisions on our coverage. I rewrite
        headlines for SEO and social, as well as analysing analytics to see
        what’s performing and what’s not. When I am in the FPE role, I am
        responsible for our coverage, daily figures and what’s leading the
        website. I also often run the 7NEWS Australia Facebook page. When I’m
        working as a Journalist my tasks include pitching and writing original
        content, curating stories from the 7 News bulletins and enhancing AAP
        copy for the web. While based in WA, it’s a national role covering
        stories from both Australia and across the globe.
      </p>
      <p>
        <h4>Education:</h4>
        <strong>
          2011-2014 Curtin University, Perth <br />
        </strong>
        Bachelor of Arts in Journalism and Public Relations
      </p>
      <p>
        <h4>References:</h4>
        Crystal Chung, Group Video and Picture Editor, Global <br />
        crystal.chung@global.com
      </p>
      <p>
        Aimie Rigas, Head of Audience Development: Sydney Morning Herald, The
        Age, Brisbane Times and WAToday <br /> aimie.rigas@gmail.com
      </p>
      <p>
        Pip Christmass, State Producer, 7NEWS.com.au <br />{' '}
        pchristmass@seven.com.au
      </p>
    </div>
  );
};

export default Resume;
