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
          <header className="app-header">
          <div className="about-title">
            <h1>Hey there &mdash; I'm Cathleen!</h1>
            <div>
              <p style={{left: "90%", color: "#fc827e"}} className="sticker">✹</p>
              <img src={require("../assets/me.png")} className="me-img"></img>
              <p style={{marginTop: "-10px", color: "#769EE5"}} className="sticker">✹</p>
            </div>
          </div>
          <div className="about-description">
            <h4>I’m a strategic designer who believes that every design decision should be deliberate and data driven.</h4>
            <p>I am adept at designing within systems and at vastly different scales, executing bigger picture concepts as well as creating the fine details. To me craftsmanship in tech means deep empathy for people's needs, attention to the stories data have to tell, and mastery of the tools.</p>
            <p>While my expertise lies in UI/UX and product design, I would love to explore more of the creative world outside of tech. Recently, I’ve been dabbling in graphic design, web design, film photography, screenwriting — anything that’ll allow me creative freedom. I’m looking for more creative outlets, so please let me know if you want to collaborate on a project!</p>
            <h3>Experience</h3>
            <ul>
              <li>Palantir &mdash; Product Designer, Remote, June 2020-Present</li>
              <li>Palantir &mdash; Product Design Intern, London, Fall 2019</li>
              <li>Uber &mdash; Product Design Intern, San Francisco, Summer 2019</li>
              <li>Google &mdash; UX Engineering Intern, New York, Summer 2018</li>
            </ul>

          </div>
          </header>

        </div>

        <Footer/>
      </div>
      </div>
    );
}

export default AboutPage;
