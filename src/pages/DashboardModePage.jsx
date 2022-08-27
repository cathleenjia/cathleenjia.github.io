import React, { useRef } from "react";
import Protect from "react-app-protect";
import 'react-app-protect/dist/index.css'
import { BrowserRouter as Router, Route} from "react-router-dom";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import '../App.css';
import '../components/project_page.css';
import ProjectImg from "../components/ProjectImg"
import ProjectSection from "../components/ProjectSection"
import NavBarV2 from "../components/NavBarV2"
import Footer from "../components/Footer"

function DashboardModePage() {
  return (
    <Protect
      sha512="2622e56283b2ccc9485c7bf910b7727b1e1e6f9eb76a2e45942577db2d01124d4d233c77cb60d8e21e618f99d60f69d13643fedbd6de57e1ad63e49a5d6ddcfb"
      blur
      boxTitle="Enter password for this project"
      buttonLabel="View project ↘"
    >
      <div className="project-page">

        <div className="project-wrapper">
        <NavBarV2/>

          <div className="project-content">

            <div className="project-block">
              <div className="column-left">
                <h3>Palantir</h3>
                <h2>Contour Dashboards</h2>
              </div>
              <div className="column-right">
                <p>Prototyped and shipped a presentation mode for Contour, Palantir’s point and click data analysis product, which was critical to the Afghanistan evacuations</p>
                <div className="project-metadata">
                  <h5>Team</h5>
                  <p>1 product manager<br />
                  2 frontend developers<br / >
                  2 backend developers
                  </p>
                </div>
                <div className="project-metadata">
                  <h5>Timeline</h5>
                  <p>Oct - Dec 2021</p>
                </div>
              </div>
            </div>


            <ProjectImg imgUrl={require("../assets/dashboardmode/contourHeroImage.png")} height="57%" position="-10% 70%" size="100%"/>


            <div className="project-block">
              <div className="column-left">
                <h2>Context</h2>
              </div>
              <div className="column-right">
                <p>Contour is Palantir's click and point data analysis tool. The company wanted to win new customers and use cases with a more first class dashboarding experience, where dashboards are auto-updating and interactive documents for sharing results.</p>
                <p>This workstream is called Contour dashboards. A new feature set that allows data analysts to build dashboards without leaving the context of Contour.</p>
                <p>I was the lead designer involved from early explorations to the final shipped product. The goal of this project was to enable data analysts to seamlessly build dashboards that stakeholders can confidently rely on.</p>
              </div>
            </div>


            <div className="project-block">
              <div className="column-left">
                <h3>Impact</h3>
                <h2>Launched in early 2021</h2>
              </div>
              <div className="column-right">
                <p>Almost a year after launch:</p>
                <ul>
                  <li>We've become generally available at 50+ enterprise customers.</li>
                  <li>95% of users have transitioned to Contour dashboards and Reports is being deprecated.</li>
                  <li>Has driven decision making for 10+ new use cases including:
                    <ul>
                      <li>Afghanistan evacuations</li>
                      <li>COVID related supply chain disruptions</li>
                      <li>COVID case data tracking</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>


            <div className="project-block">
              <div>
                <h3>What is Contour?</h3>
                <h2>Point and click data analysis tool for big volumes of data</h2>
              </div>
            </div>


            <ProjectImg imgUrl={require("../assets/dashboardmode/contourUI.png")} height="60%" position="30%" size="100%"/>


            <div className="project-block">
              <div>
                <h3>What is Reports?</h3>
                <h2>Text editor tool</h2>
              </div>
            </div>


            <ProjectImg imgUrl={require("../assets/dashboardmode/reportsUI.png")} height="54%" position="30%" size="100%"/>


            <div className="project-block">
              <div>
                <h2>Workflow before</h2>
              </div>
            </div>

            <ProjectImg imgUrl={require("../assets/dashboardmode/contourWorkflowBefore.png")} height="60%" position="30%" size="100%"/>


            <div className="project-block">
              <div>
                <h3>Business goal</h3>
                <h2>Win new customers and use cases with a more first class dashboarding experience</h2>
              </div>
            </div>


            <div className="project-block">
              <div className="column-left">
                <h2>Research</h2>
              </div>
              <div className="column-right">
                <p>Palantir has “implementation teams”, who own customer success, use cases, and relations for Palantir instances. Because Palantir’s customers often deal with sensitive data and customer relations are often delicate, product teams lean on “implementation teams” for customer signal.</p>
                <p>We chatted with <b>3 implementation team members and 1 data analyst and 1 stakeholder from the army</b> to understand developer pain points and evaluate how Contour dashboards could provide value to them.</p>
              </div>
            </div>


            <div className="project-block">
              <div className="column-left">
                <h2>Insights</h2>
              </div>
              <div className="column-right">
                <p><b>🤔&nbsp; Choppy editing experience:&nbsp;</b>Users constantly have to switch back and forth between Contour and Reports during the editing process.</p>
                <ul>
                  <li>"I can't keep track of which charts I've already added to my Report."</li>
                  <li>“I keep ending up with duplicates in my report.”</li>
                </ul>
                <p><b>🚨&nbsp; Reports are fragile&nbsp;</b></p>
                <ul>
                  <li>"It loooks really bad when a stakeholder opens a Report that has a bunch of errors in it."</li>
                  <li>“My Report breaks all the time.”</li>
                  <li>"Sometimes editing my Contour file causes an error in my Report, so I keep having to go back and forth between the apps to make sure my Report is up to date."</li>
                </ul>
                <p><b>🔎&nbsp; Stakeholders want to investigate data in detail&nbsp;</b></p>
                <ul>
                  <li>"I get many requests to add more parameters or to build new Reports showing a different scenario."</li>
                  <li>“Sometimes if the numbers look strange, I want to double check the math myself.”</li>
                </ul>
              </div>
            </div>


            <div className="project-block">
              <div>
                <h3>Design goal</h3>
                <h2>Enable data analysts to seamlessly build dashboards that stakeholders can confidently rely on</h2>
              </div>
            </div>


            <div className="project-block">
              <div className="column-left">
              </div>
              <div className="column-right">
                <p>We're achieving this goal by <b>introducing a dashboarding experience within the Contour product</b>:</p>
                <ol>
                <li>Improving today's choppy editing experience by <b>introducing a dashboard preview</b> so data analysts can continue to edit data while building their presentation.</li>
                <li>Make dashboard less error prone by <b>syncing the dahsboard to the analysis</b> and asking for confirmation with any breaking changes.</li>
                <li>Making dashboards more interactive by <b>introducing "exploration mode"</b>, where viewers of a dashboard can make temporary edits, including interactive chart selections, to the data without affecting underlying logic.</li>
              </ol>
              </div>
            </div>


            <div className="project-block">
              <div className="column-left">
                <h2>Why not just improve Reports?</h2>
              </div>
              <div className="column-right">
                <p>Apart from technical constraints, a majority of boards used in Reports are imported from Contour already.</p>
              </div>
            </div>


            <ProjectImg imgUrl={require("../assets/dashboardmode/reportsUsage.png")} height="29%" position="-10% 70%" size="100%"/>


            <div className="project-block">
              <div className="column-left">
                <h3>Design principle</h3>
                <h2><s>Rich text editor</s> → Dashboard</h2>
              </div>
              <div className="column-right">
              <p>This new feature should not be a rich text editor; the documents created with this new feature set should look and feel like interactive dashboards.</p>
                <ul>
                  <li>Primarily data visualizations with a minimal amount of free text</li>
                  <li>Offer opinionated formatting options</li>
                  <li>Visually encourage viewers to interact and interrogate data further</li>
                </ul>
              </div>
            </div>


            <div className="project-block">
              <div>
                <h3>Key workflows</h3>
                <h2>1.&nbsp;&nbsp; Create dashboard</h2>
              </div>
            </div>

            <div>
              <iframe
                src="https://youtube.com/embed/ZQpHmG50t-g"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
                width="100%"
                height="600px"
              />{" "}
            </div>


            <div className="project-block">
              <div>
                <h2>2.&nbsp;&nbsp; Interact with data</h2>
              </div>
            </div>


            <div>
              <iframe
                src="https://youtube.com/embed/qrdqwGe1NmU"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
                width="100%"
                height="600px"
              />{" "}
            </div>


            <div className="project-block">
              <div>
                <h2>Early exploration & iterations</h2>
              </div>
            </div>


            <ProjectImg imgUrl={require("../assets/dashboardmode/contourIterations.png")} height="121%" position="-10% 70%" size="100%"/>


            <div className="project-block">
              <div>
                <h2>Final design spec</h2>
              </div>
            </div>
          </div>


          <ProjectImg imgUrl={require("../assets/dashboardmode/contourFinalSpec.png")} height="250%" position="-10% 70%" size="100%"/>


          <Footer/>

        </div>
      </div>
    </Protect>
  );
}

export default DashboardModePage;
