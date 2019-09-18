import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as Scroll from 'react-scroll';

import '../App.css';
import '../components/project_page.css';
import ProjectImg from "../components/ProjectImg"
import ProjectSection from "../components/ProjectSection"
import NavBar from "../components/NavBar"
import TableOfContents from '../components/TableOfContents'

function UberPage() {
  return (
    <div className="app project-page">
      <div className="main">
        <div className="app-header">
          <Link to ="/">
            <p className="nav-header link">&larr; Go back</p>
          </Link>
            <div className="project-title">
              <h1>Uber internship</h1>
            </div>
            <div className="project-description">
              <h3>Researched and designed new mobile experience to increase long term engagement with drivers.</h3>
              <p className="project-details"><b>Role:</b> Product design intern</p>
              <p className="project-details"><b>Team:</b> Uber Pro</p>
            </div>
            <ProjectImg imgUrl={require("../assets/uber/mock.png")} height="45%" position="-10% 70%" size="100%"/>
            <Scroll.Element name="0">
              <ProjectSection
                header="01 - Problem"
                subheader="I worked on the Uber Pro product, a rewards program that recognizes committed drivers who provide great service.">
                <p>To achieve a specific tier, drivers had to earn points while making sure their cancellation rate was low and their star rating was high. Rewards unlock at different tiers, such as priority airport rematches for Diamond drivers, or 4% cash back on gas for Platinum drivers with an Uber Visa Debit Card. My favorite is 100% free college tuition at Arizona State University Online for the driver or their family member, which is unlocked at Gold and after completing 3,000 lifetime trips.</p>
                <p>The challenge for my project was to design a new part of the program that would help increase long term engagement with drivers. However, due to NDA terms I cannot share any additional specifics of my project. </p>
              </ProjectSection>
            </Scroll.Element>
            <Scroll.Element name="1">
              <ProjectSection
                header="02 - Goals"
                subheader="Going into summer, I was super excited to get a better understanding of the full product design lifecycle. ">
                <p>And with this internship, I had a couple of goals in mind:</p>
                <p>The nature of my last internship at Google made my work pretty independent and separate from my teammates’ work. So I really wanted to do more collaborative work. I wanted a taste of working with engineering and product partners and working in a problem space with constraints set by these partnerships.</p>
                <p>Additionally, I spent my last internship primarily prototyping and experimenting; nothing that I worked on was meant to be sent off to production. My work was done for the sole purpose of learning and gathering insight for the Google Sheets team. So I was really looking forward to working on a project with the immediate potential to launch.</p>
              </ProjectSection>
            </Scroll.Element>
            <Scroll.Element name="2">
              <ProjectSection
                header="03 - My work"
                subheader="Deep dive into building a robust design framework">
                <p><b>Research + audit</b></p>
                <p>I began my work by auditing other loyalty apps and creating a deck summarizing the mechanisms in which other programs enable points earning and points spending as well as the types of rewards that are offered. I then made a set of recommendations based on these findings. </p>
                <p><b>Defining product goals</b></p>
                <p>I worked with product to narrow down the scope of this addition to to the exiting loyalty program. Some key challenges we faced were differentiating the functionality of this new addition from the existing functionalities - what the unique value add would be.</p>
                <p><b>Rapid iteration</b></p>
                <p>With a narrowed scope, I moved on to rapid brainstorming and iteration to see how all these ideas would manifest in the Uber Driver app. </p>
                <p><b>Reprioritization of projects</b></p>
                <p>At around this point, some changes had been made to the roadmap on product’s side, and my project ended up getting deprioritized for a bit. Admittedly this was disappointing at first, but honestly I think it was an incredible learning opportunity regardless. It’s not uncommon for this to happen at a company edging on the larger side, and it was good for me to practice discipline and to keep pushing through the ambiguity that comes with the deprioritization of a project.</p>
                <p><b>Building a robust framework</b></p>
                <p>Using my best judgement, I narrowed the scope of the product and defined design goals. From here, I focused on building a robust framework that would remain scalable for when the project gets picked up again later into the quarter. </p>
                <p><b>Final product</b></p>
                <p>Please email me if you are interested in seeing my project more in detail!</p>
              </ProjectSection>
            </Scroll.Element>
            <Scroll.Element name="3">
              <ProjectSection
                header="04 - Side project"
                subheader="Using the Uber app as a platform for change.">
                <p>Aside from my main project, I got the opportunity to work with another designer, Nisa Andrews, to put together some mocks of ideas on how Uber can start to become more sustainable and environmentally conscious. These mocks were later used in a pitch deck for product leadership.</p>
              </ProjectSection>
            </Scroll.Element>
            <Scroll.Element name="4">
              <ProjectSection
                header="05 - Reflections"
                subheader="User empathy is an important north star throughout the entire product lifecycle. ">
                <p>My biggest takeaway from this internship is that user empathy is important to keep in mind not only when designing user interfaces but arguably more important during the product definition/planning phase. The way that a product operates and the way that a product is engineered in the backend can massively impact how empathetic it is towards users. The user is a topic that should be the north star of every conversation in a company. </p>
              </ProjectSection>
            </Scroll.Element>
            <TableOfContents items={['Problem', 'Goals', 'My work', 'Side project', 'Reflections']}/>
        </div>

      </div>


      <NavBar email="cathleenjia@berkeley.edu"/>


  </div>
  );
}

export default UberPage;
