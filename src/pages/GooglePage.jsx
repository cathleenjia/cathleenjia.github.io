import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as Scroll from 'react-scroll';

import '../App.css';
import '../components/project_page.css';
import ProjectImg from "../components/ProjectImg"
import ProjectSection from "../components/ProjectSection"
import NavBar from "../components/NavBar"
import TableOfContents from '../components/TableOfContents'

function GooglePage() {
  return (
    <div className="app project-page">
      <div className="main">
        <div className="app-header">
          <Link to ="/">
            <p className="nav-header link">&larr; Go back</p>
          </Link>
            <div className="project-title">
              <h1>Google internship</h1>
            </div>
            <div className="project-description">
              <h3>Prototyped solutions for discoverability in Google Sheets with an accessibility first lens.</h3>
              <p className="project-details"><b>Role:</b> UX Engineering Intern</p>
              <p className="project-details"><b>Team:</b> Google Sheets</p>
            </div>
            <ProjectImg imgUrl={require("../assets/google/team.png")} height="40%" position="-10% 70%" size="100%"/>
            <Scroll.Element name="0">
              <ProjectSection
                header="01 - What is UX Engineering"
                subheader="As a UX Engineer, I worked at the cross section of UX design and frontend development."
                img={<ProjectImg imgUrl={require("../assets/google/uxe-ladder.png")} height="50%" position="-10% 70%" size="100%"/>}>
                <p>A UX Engineer works on a hybrid of UX Design and Frontend. They act as a bridge between UX Designers and Software Developers, thinking about design decisions as well as implementation details. Within the UX Engineering realm, there are two focuses: a developer focus and a designer focus. I sat at the developer focus and much of my work was prototyping early stage ideas.</p>
                <p>I partnered with researchers and designers to define and deliver new features, translate concepts into living, breathing prototypes, and iterate on interactions, animations, and details to deliver the perfect experience. The very basis for this role is exploration, so it leaves much room for experimentation. A project is considered successful if we are able to gain new insight and new findings from it.</p>
              </ProjectSection>
            </Scroll.Element>
            <Scroll.Element name="1">
              <ProjectSection
                header="02 - Context setting"
                subheader="I met with stakeholders and teammates to determine the direction of my project.">
                <p>My intern host provided me with a broad prompt that required me to improve accessibility and productivity in Sheets.</p>
                <p>At a company as large as Google, it can be difficult to figure out what explorations have been done and what hasn't. I spent a lot of time meeting with various stakeholders on the Sheets team and scraping through documentation of different proposals and past user studies. After getting a good grasp on the task at hand, I was able to synthesize everything I had learned and define a new concept.</p>
                <p>Because of my NDA contract, I am unable to speak about specifics of my project.</p>
              </ProjectSection>
            </Scroll.Element>
            <Scroll.Element name="2">
              <ProjectSection
                header="03 - Design"
                subheader="I had full ownership of the design and experience of my project, producing 3 different iterations.">
                <p>During this part of my process, I improved my Sketch skills tremendously. I learned to use various keyboard shortcuts and functionality as well as external plugins and stickersheets. I honestly think it was an incredible time to be working in design at Google because they had just released new Material changes at Google I/O, so I got to see and work first hand on UI changesd that are currently rolling out.</p>
                <p>I also partnered with UX designers and UX writers to seek feedback during my design process. This was my first time learning about a UX writer role, much less work with one. I saw how much of an impact a small syntactic change could make in user experience. This taught me to consider carefully and deliberately about the words and phrases I choose to include in my designs.</p>
              </ProjectSection>
            </Scroll.Element>
            <Scroll.Element name="3">
              <ProjectSection
                header="04 - Develop"
                subheader="I translated my designs into 4 living, breathing prototypes.">
                <p>I built a Chrome extension to inject code into an existing webpage, and I built 3 other prototypes from scratch using frameworks built by other UX engineers.</p>
                <p>I loved how hack-y this role was. What makes this role so different any other software development role is that it forces you to iterate quickly. It teaches you what features you can get away with making crappy, and smoke and mirrors was perfectly acceptable and even encouraged. I had to learn to narrow my focus to a specific interaction. Usually a perfectionist, this taught me to prioritize which features were most important to building a prototype useful for gaining new insight.</p>
              </ProjectSection>
            </Scroll.Element>
            <Scroll.Element name="4">
              <ProjectSection
                header="05 - Research"
                subheader="I created a research plan and conducted 20 user studies.">
                <p>I conducted 10 user studies each for 2 of my prototypes.</p>
                <p>One of the most interesting studies I conducted was with one power user and one new user. They were friends working on the same team: The power user had been working at Google for years whereas the new user just recently joined Google and had been using Microsoft Office up until then.</p>
                <p>From the new user, I learned that I had made too many assumptions about the user's understanding of what I considered basic functionality. While the new user had difficulty navigating my prototype, the power user found it immensely powerful and applicable towards his current work.</p>
                <p>This study exposed me to unique problems an enterprise product might encounter -- balancing the simplicity and explicitness required for new users with introducing powerful functionalitys needed by long time users.</p>
                <p>From these findings, I was able to complete my third iteration. I designed a new interaction that offered powerful functionality but hid it behind a layer of abstraction, making it easily accessible for power users while also reducing clutter on the interface for new users.</p>
              </ProjectSection>
            </Scroll.Element>
            <Scroll.Element name="5">
              <ProjectSection
                header="06 - 20% Project"
                subheader="I also worked on a 20% project with five other UX interns.">
                <p>Our prompt was "the future productivity". We were encouraged to take a blue sky approach and be as creative as we liked. It was great to work with the other UX interns in defining our problem space and creating a solution together.</p>
                <p>At the end of the sprint, we presented our research, designs, and insights to the entire Google Docs UX team.</p>
              </ProjectSection>
            </Scroll.Element>
            <Scroll.Element name="6">
              <ProjectSection
                header="07 - Planned Parenthood design sprint"
                subheader="I had the opportunity to help Planned Parenthood redesign their online appointment booking experience in order to remove friction for patients.">
                <p>A group of Google designers met with Planned Parenthood designers to come up with new solutions. It was really eye opening in terms of learning about the obstacles that Planned Parenthood faces. We all can read about the policies and legislation that are currently affecting Planned Parenthood's work, but nothing compares to talking to the people on the frontlines of the reproductive movement. The effects ripple so far out and it causing so many more challenges than I had ever even thought to consider.</p>
                <p>One issue that really resonated with me was that all of the brick and mortar Planned Parenthood clinics are franchised and individually owned. This creates an obstacle when trying to create a cohesive voice or operational system. This was the main pain point we addressed, creating a streamlined online booking system for individually run clinics.</p>
              </ProjectSection>
            </Scroll.Element>
            <ProjectImg imgUrl={require("../assets/google/interns.jpg")} height="60%" position="-10% 70%" size="100%"/>
            <ProjectImg imgUrl={require("../assets/google/frens.png")} height="60%" position="-10% 70%" size="100%"/>
            <Scroll.Element name="7">
              <ProjectSection
                header="08 - Reflections"
                subheader="It was incredibly humbling to get to work alongside such talented individuals.">
                <p>I am beyond grateful for this internship experience. It was undeniably intimidating to be working with a group of 10 other UX interns who were all at least 3 years older than me, but I ended up making some of my closest friends this summer. Maybe it was the small intern class or maybe it was the unfamiliar and amazing city we all got dropped in for 3 months, but it was an experience I wouldn't trade for anything in the world.</p>
              </ProjectSection>
            </Scroll.Element>
            <TableOfContents items={['UX Engineering', 'Context', 'Design', 'Develop', 'Research', '20% Project', 'Planned Parenthood', 'Reflections']}/>
        </div>

      </div>


      <NavBar email="cathleenjia@berkeley.edu"/>


  </div>
  );
}

export default GooglePage;
