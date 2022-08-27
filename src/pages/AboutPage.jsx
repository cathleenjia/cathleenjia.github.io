import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../App.css';
import './about_page.css';
import ProjectPreview from "../components/ProjectPreview"
import NavBarV2 from "../components/NavBarV2"
import ScrollToTop from "../ScrollToTop"
import Footer from "../components/Footer"

function AboutPage() {

    return (
      <div className="project-page">
        <ScrollToTop />
        <div className="home-wrapper">

        <NavBarV2/>
          <div className="main">

            <div className="project-block">
              <div className="column-left">
                <h3>Hello -</h3>
                <h2>Nice to meet you!</h2>
              </div>
              <div className="column-right">
                <p>I am a product designer who has previously worked on data pipelining and analytics tools, product documentation, platform navigation, and web app building tools.</p>
                <p> In my professional career, I have always gravitated towards the technology industry because of its ability to have a positive impact at scale. To me craftsmanship in tech means deep empathy for people's needs, attention to the stories data have to tell, and mastery of the tools. Through my experience, I’ve discovered that I am most fulfilled collaborating with partners to develop elegant solutions to complex problems.</p>
                <p>In my personal endeavors, I seek out creative opportunities as outlet for expression and exploration.</p>
              </div>
            </div>

            <div className="project-block">
              <div className="column-left">
                <h3>Experience</h3>
              </div>
              <div className="column-right">
                <p>Palantir — Product designer,&nbsp; Remote,&nbsp; June 2020 - Present</p>
                <p>Palantir — Product design intern,&nbsp; London,&nbsp; Fall 2019</p>
                <p>Uber — Product design intern,&nbsp; San Francisco,&nbsp; Summer 2019</p>
                <p>Google — UX Engineering intern,&nbsp; NYC,&nbsp; Summer 2018</p>
              </div>
            </div>

          </div>

          <Footer/>
          </div>
      </div>
    );
}

export default AboutPage;
