import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as Scroll from 'react-scroll';

import '../App.css';
import '../components/project_page.css';
import ProjectImg from "../components/ProjectImg"
import ProjectSection from "../components/ProjectSection"
import NavBar from "../components/NavBar"
import TableOfContents from '../components/TableOfContents'

function BuildtheFuturePage() {
  return (
    <div className="app project-page">
      <div className="main">
        <div className="app-header">
          <Link to ="/">
            <p className="nav-header link">&larr; Go back</p>
          </Link>
            <div className="project-title">
              <h1>Build the Future</h1>
            </div>
            <div className="project-description">
              <h3>How might we refresh Build the Future's identity, while staying true to its entrepreneurial values?</h3>
              <p className="project-details"><b>Role:</b> Brand + UX Design, Web development</p>
              <p className="project-details"><b>Tools:</b> Sketch, Illustrator, HTML/CSS, Javascript</p>
            </div>
            <ProjectImg imgUrl={require("../assets/buildthefuture/mock.png")} height="45%" position="-10% 70%" size="100%"/>
            <Scroll.Element name="0">
              <ProjectSection
                header="01 - Context setting"
                subheader="Build the Future is a speaker series at UC Berkeley designed to teach and inspire students to build startups."
                img={<ProjectImg imgUrl={require("../assets/buildthefuture/before.png")} height="110%" position="-10% 70%" size="100%"/>}>
                <p>We go over the basic building blocks of a successful startup and connect this knowledge to emerging fields. Over the course of the semester, we divide our class of 50 students into groups and go through the actual process of ideating and creating a startup idea that is intriguing to investors, culminating in a pitch to venture capitalists. In addition, we provide an overview of the startup scene at Berkeley, pointing out resources ready to help students get a head start.</p>
                <p>The course website contains information about upcoming guest speakers, course policies, and course staff. Below are screen captures from the previous design.</p>
              </ProjectSection>
            </Scroll.Element>
            <Scroll.Element name="1">
              <ProjectSection
                header="02 - Problem"
                subheader="Build the Future needed a new identity that would help define the voice of the organization and streamline the curriculum.">
                <p>There were some key things this new brand needed to accomplish for the course.</p>
                <p><b>1. Unique voice: </b>While the course was founded under a campus startup incubator, the course had started to grow independent from this campus entity. Hence, the course needed to establish a new identity unique from its old brand.</p>
                <p><b>2. Modular visual language: </b>The course needed a modular visual design system, a cohesive visual language which also offered flexibility with the various design needs of the curriculum, including showcasing guest speakers from partnering companies.</p>
                <p><b>3. Establish common language: </b>For a student run course, who's course staff turnover rate was pretty much every semester, a better way to communicate design specification was necessary to establish a cohesive voice.</p>
              </ProjectSection>
            </Scroll.Element>
            <Scroll.Element name="2">
              <ProjectSection
                header="03 - Key insights"
                subheader="Having been course staff for 2 semesters, I built a strong understanding for the goals and values in which the course was built upon.">
                <p>1. Learn: Focus on learning and not the title that comes with it. Title will come naturally. Craftmanship in business stems from a mastery of tools.</p>
                <p>2. Diversity: Work with people with personality and different experiences. Work with people who are independent thinkers, have struggled, and failed.</p>
                <p>3. People: Success derives from a deep empathy for people. Work on something meaningful. Work on projects that are challenging, impactful, and make a difference. We're rethinking the social contract that businesses are founded upon, proposing an ‘ethical economy’ that integrates moral concerns with economic measurement.</p>
              </ProjectSection>
            </Scroll.Element>
            <Scroll.Element name="3">
              <ProjectSection
                header="04 - Moodboard"
                subheader="I envisioned a brand around human centricity and innovation.">
                <p>Recognizing the values in which Build the Future stood for, human centricity and innovation, I put together a moodboard to convey what I envisioned the redesign would look like.</p>
              </ProjectSection>
            </Scroll.Element>
            <ProjectImg imgUrl={require("../assets/buildthefuture/moodboard.png")} height="65%" position="-10% 70%" size="100%"/>
            <Scroll.Element name="4">
              <ProjectSection
                header="05 - Midfi mock"
                subheader="The design of these interfaces were informed by the knowledge that our students primarily access the course website via mobile.">
                <p>Hence, I used a mobile first design lens when I created these interfaces. The interface as a whole needed to act responsively regardless of screen size. I drew inspiration from Notion.so, defining all page content as a static size whereas the margins would resize as necessary.</p>
                <p>The landing page was designed such that shrinking the webpage would make the header, subheader, and button stack. The interface for weekly guest speakers was designed to resize well on various screens and to convey crucial information in an efficient manner. I chose to use a calendar interface metaphor, with each card representing a different week and speaker. I also chose to include a photo of the speaker rather than a company logo to echo the humanistic values of our decal. The class was created so our students could learn about entrepreurship from personal narratives rather than company pitches.</p>
              </ProjectSection>
            </Scroll.Element>
            <ProjectImg imgUrl={require("../assets/buildthefuture/midfi.png")} height="120%" position="-10% 70%" size="100%"/>
            <Scroll.Element name="5">
              <ProjectSection
                header="06 - Illustrations"
                subheader="The basis of the illustration was defined by the interface.">
                <p>Because this illustration is meant to be center justified regardless of screen size, it was necessary for the illustration to be relatively symmetrical. I chose to incorporate people to echo the course's humanistic values, and the building blocks highlight the curriculum, which is meant to introduce of "building blocks" of entrepreurship to our students. My choice of boldly colored shapes was also informed by a concern for loss of detail on smaller screens.</p>
              </ProjectSection>
            </Scroll.Element>
            <ProjectImg imgUrl={require("../assets/buildthefuture/illustration.png")} height="55%" position="-10% 70%" size="100%"/>
            <Scroll.Element name="6">
              <ProjectSection
                header="07 - Color palette"
                subheader="My bold color choices are consistent with my motivation to mitigate loss of detail on smaller screens.">
                <p>The choice of violet toned blues are a gentle nod at our parent organization that we were founded under, whose color palette is a bright sky blue.</p>
              </ProjectSection>
            </Scroll.Element>
            <ProjectImg imgUrl={require("../assets/buildthefuture/color-palette.png")} height="60%" position="-10% 70%" size="100%"/>
            <Scroll.Element name="7">
              <ProjectSection
                header="08 - Final product"
                subheader="This is the final website. You can also visit it here: www.thefuture.build">
                <p>I am beyond grateful for this internship experience. It was undeniably intimidating to be working with a group of 10 other UX interns who were all at least 3 years older than me, but I ended up making some of my closest friends this summer. Maybe it was the small intern class or maybe it was the unfamiliar and amazing city we all got dropped in for 3 months, but it was an experience I wouldn't trade for anything in the world.</p>
              </ProjectSection>
            </Scroll.Element>
            <ProjectImg imgUrl={require("../assets/buildthefuture/final.png")} height="200%" position="-10% 70%" size="100%"/>
            <Scroll.Element name="8">
              <ProjectSection
                header="09 - Reflections"
                subheader="Completing this project highlighted the advantages of having a technical background when designing products.">
                <p>My understanding of flex displays, responsive design, and interface metaphors helped me created an optimal user interface that could be viewed from any size screen. I was also able to take a uniquely strategic approach to branding. This project has only further reinforced my belief that all designers should code and all coders should design! Neither skill is mutually exclusive of the other. Products should be driven by a recognition for aesthetic implications and informed by technical logic.</p>
                <p>I've also learned a lot about concrete success metrics.

As a part of the course staff, I have seen our course website pulled up on our students screens a lot. Seeing my product in use and actually serving its functional purpose of being the central repository of course information is a deeply satisfying feeling.</p>
              </ProjectSection>
            </Scroll.Element>
            <TableOfContents items={['Context setting', 'Problem', 'Key insights', 'Moodboard', 'Midfi mock', 'Illustrations', 'Color palette', 'Final product', 'Reflections']}/>
        </div>

      </div>


      <NavBar email="cathleenjia@berkeley.edu"/>


  </div>
  );
}

export default BuildtheFuturePage;
