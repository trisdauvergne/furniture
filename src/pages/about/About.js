import React from 'react';
import { Link } from 'react-router-dom';
import Video from '../../components/video/Video';
import './about.css';

const About = () => {
  return (
    <section className="about">
      {/* <h1>About / welcome... </h1> */}
      <div className="about__txt">
        <p><strong>Brand name</strong> is a Stockholm based carpenter that produces unique, handcrafted pieces.</p>
        <br></br>
        <p>Brand name produces seasonal collections but is also available for commissions, simply contact them <Link to="/commissions"><button className="btn"><strong>here</strong></button></Link></p>
        <br></br>
        <p>Click <Link to="/catalog"><button className="btn"><strong>here</strong></button></Link> to view brand name's collection.</p>
        <Video />
      </div>
    </section>
  );
};

export default About;
