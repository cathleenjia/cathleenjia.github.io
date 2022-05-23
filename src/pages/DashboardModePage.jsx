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

            <div className="project-header">

                <div className="project-title">
                  <p>Palantir</p>
                  <h2>Contour Dashboards</h2>
                </div>

                <div className="project-description">
                  <p>Prototyped and shipped a presentation mode for Contour, Palantir’s point and click data analysis product, which was critical to the Afghanistan evacuations</p>

                  <div className="project-metadata">
                    <p className="muted-label">Team</p>
                    <p>1 product manager<br/>
                    2 frontend developers<br/>
                    2 backend developers </p>
                  </div>

                  <div className="project-metadata">
                    <p className="muted-label">Timeline</p>
                    <p>Aug - Dec 2020</p>
                  </div>
                </div>

              </div>

              <ProjectImg imgUrl={require("../assets/dashboardmode/dashboard-splash.png")} height="64%" position="-10% 70%" size="100%"/>

              <Scroll.Element name="what-is-contour">
                <ProjectSection
                  header="01 - Context"
                  subheader="What is Contour?">
                  <p>Contour provides a point-and-click product to perform data analysis on datasets at scale.</p>
                  <ProjectImg imgUrl={require("../assets/dashboardmode/what-is-contour.gif")} height="56%" position="-10% 70%" size="100%"/>
                  <p>Key features of Contour include:</p>
                  <ul>
                    <li>Visualize, filter, and transform data without code.</li>
                    <li>Organize complex analyses into analytical paths.</li>
                    <li>Parameterize analyses to easily switch between different views of the data and results.</li>
                  </ul>
                </ProjectSection>
              </Scroll.Element>

              <Scroll.Element name="what-is-reports">
                <ProjectSection
                  header="02 - Context"
                  subheader="What is Reports?">
                  <p>After using Contour to answer a series of a questions with data, data analysts will often <u>create an artifact to share results</u> in a more presentable and readable way.</p>

                  <p>Reports was the solution to this need. It is an entirely separate application that is essentially a doc writing product that supports content from multiple types of assets (from other Palantir data analysis tools). </p>
                  <ProjectImg imgUrl={require("../assets/dashboardmode/what-is-reports.png")} height="57.5%" position="-10% 70%" size="100%"/>
                </ProjectSection>
              </Scroll.Element>

              <Scroll.Element name="problems">
                <ProjectSection
                  header="03 - Decomp"
                  subheader="Problem defintion">
                  <p>However, Reports suffers from a few key limitations:</p>
                  <ol>
                    <li><u>Choppy writing experience:</u> Because the presentation creation experience is divorced from the data analysis experience, analysts have to constantly switch context. Notably, users had no way of knowing if a data visualization had already been added to the Report, leading to either missing or duplicate assets.</li>
                    <li><u>Limited interactive interrogation:</u> Because Reports is divorced from the underlying logic, it isn’t able to support interactive interrogation of data visualizations. The subpar work around is creating a new parameter for each property of the data the viewer of the report may want to drill into.</li>
                    <li><u>Inconsistent and clunky parameters experience:</u> The look, location, and configuration experience of parameters differed widely when moving between Contour and Reports even though the primitives were fundamentally the same.</li>
                    <li><u>Unintuitive versioning:</u> It was difficult to manage logic and data versions across the two applications.</li>
                    <li><u>Lengthy load time:</u> Loading assets in Reports was lengthy because of the technical implications of being a separate application from Contour.</li>
                  </ol>
                </ProjectSection>
              </Scroll.Element>

              <Scroll.Element name="opportunity">
                <ProjectSection
                  header="04 - Decomp"
                  subheader="Opportunity">
                  <p>How might we design a more interactive and dynanic presentation solution?</p>
                </ProjectSection>
              </Scroll.Element>

              <Scroll.Element name="dashboard-mode">
                <ProjectSection
                  header="05 - Define"
                  subheader="Solution">
                  <p>Marry the data analysis and artifact creation experiences into <u>one unified product within Contour</u> so...</p>
                  <div className="column-wrapper-50-50">
                    <div className="column-50-50">
                      <h4>Data analysts can:</h4>
                      <ul>
                        <li>Add content to the dashboard in context of the data analysis, allowing users to build both the data transformations and presentation simultaneously.</li>
                        <li>Create a more intuitive parameter experience for stakeholders with a more unified configuration workflow.</li>
                        <li>Build more interactive dashboards with interactive visualizations that apply filters to other downstream visualizations, eliminating the need to create a new parameter for every possible filter type.</li>
                        <li>Easily manage versioning when both logic and presentation live in the same application.</li>
                      </ul>
                    </div>
                    <div className="column-50-50">
                      <h4>Stakeholders can:</h4>
                      <ul>
                        <li>Quickly consume key information without leaving the context of the analysis.</li>
                        <li>Interrogate data more intuitively with interactive data visualizations.</li>
                      </ul>
                    </div>
                  </div>
                </ProjectSection>
              </Scroll.Element>

              <Scroll.Element name="adding-visualizations">
                <ProjectSection
                  header="06 - The MVP"
                  subheader="Adding visualizations">
                  <p>The first step is adding a visualization from the analysis to the dashboard, which should be immediately reflected in the UI. I explored two options of showing a contextual preview:</p>
                  <ProjectImg imgUrl={require("../assets/dashboardmode/adding-viz.png")} height="32%" position="-10% 70%" size="100%"/>
                  <p>We decided on option 2, combining it with the existing parameters to reduce the number of panels on screen at one time. Option 2 also applies a common preview design pattern used in Google slides, Powerpoint, and other document creation products. </p>
                  <ProjectImg imgUrl={require("../assets/dashboardmode/adding-viz.gif")} height="56%" position="-10% 70%" size="100%"/>
                </ProjectSection>
              </Scroll.Element>

              <Scroll.Element name="navigation-pattern">
                <ProjectSection
                  header="07 - The MVP"
                  subheader="Navigation pattern">
                  <p>Next, I explored some entry point options to navigate to the actual dashboard. </p>
                  <ProjectImg imgUrl={require("../assets/dashboardmode/navigation.png")} height="32%" position="-10% 70%" size="100%"/>
                  <p>We chose option 2, with a button and full contextual switch, because we wanted dashboard mode to feel like a true presentation experience, abstracting away as much of the complex logic backing the presentation as possible.</p>
                </ProjectSection>
              </Scroll.Element>

              <Scroll.Element name="interrogating-data">
                <ProjectSection
                  header="08 - The MVP"
                  subheader="Interrogating data">
                  <p>With all the basic functionality out of the way, we can now move on to the true value in this new version of reporting: Users are be able to easily interactively interrogate data without changing the underlying logic. </p>
                  <ProjectImg imgUrl={require("../assets/dashboardmode/interrogate-data.gif")} height="56%" position="-10% 70%" size="100%"/>

                  <div className="column-65-30">
                    <div className="column-65">
                      <ProjectImg imgUrl={require("../assets/dashboardmode/parameters.png")} height="40%" position="-10% 70%" size="100%"/>
                    </div>
                    <div className="column-30">
                      <h4>Parameters</h4>
                      <p>Parameters that are used in the underlying logic of a data visualization are automatically added to dashboard mode. Consumers of the dashboard are then able to temporarily override parameter values to explore the data more. </p>
                    </div>
                  </div>

                  <div className="column-65-30">
                    <div className="column-65">
                      <ProjectImg imgUrl={require("../assets/dashboardmode/ephemeral-selections.png")} height="78%" position="-10% 70%" size="100%"/>
                    </div>
                    <div className="column-30">
                      <h4>Ephemeral selections</h4>
                      <p>Consumers of a dashboard can also apply additional filters by making selections directly on visualizations. These selections will update other downstream visualizations that use the same underlying logic.</p>
                    </div>
                  </div>

                  <div className="column-65-30">
                    <div className="column-65">
                      <ProjectImg imgUrl={require("../assets/dashboardmode/summary.png")} height="32%" position="-10% 70%" size="100%"/>
                    </div>
                    <div className="column-30">
                      <h4>Summary ribbon</h4>
                      <p>The ribbon across the top will summarize all temporary overrides.</p>
                    </div>
                  </div>
                </ProjectSection>
              </Scroll.Element>

              <Scroll.Element name="concurrent-editing">
                <ProjectSection
                  header="09 - The MVP"
                  subheader="Concurrent editing">
                  <p>In addition to the new dashboard mode, we also updated some of Contour’s existing functionality. Previously, multiple people were able to edit the same analysis at the same time, but in a pretty clunky and unideal way. Changes would only sometimes save depending on how lucky you got. </p>
                  <p>Since we didn’t have enough engineering support to do an entire overhaul of the concurrent editing experience but still wanted to ship a more functional product with the release of dashboard mode, <u>we decided to add document adding as a short term solution.</u> </p>
                  <p>This means that <u>only one person is able to make edits at a single time</u>, and the document will be locked for all other viewers regardless of access permissions. </p>
                  <ProjectImg imgUrl={require("../assets/dashboardmode/concurrent-editing.png")} height="30%" position="-10% 70%" size="100%"/>
                </ProjectSection>
              </Scroll.Element>

              <Scroll.Element name="design-system">
                <ProjectSection
                  header="10 - The MVP"
                  subheader="Design system">
                  <p>We also took this opportunity to lightly refresh the design system used in Reports. The new design system offers opinionated formatting options that would help users build clean, presentation-ready dashboard and prevent them from creating any atrocious looking ones:</p>
                  <ul>
                    <li>Text and visualization widgets cannot be added to the same row</li>
                    <li>Each row can only contain up to 3 widgets at once</li>
                    <li>Text widgets support multiple lines of text, intentionally deciding against Notion’s block approach since our text support doesn’t need to be super robust as dashboard mode is not a documentation tool. </li>
                  </ul>
                  <ProjectImg imgUrl={require("../assets/dashboardmode/design-system.png")} height="50%" position="-10% 70%" size="100%"/>
                </ProjectSection>
              </Scroll.Element>

              <Scroll.Element name="launch-and-impact">
                <ProjectSection
                  header="11 - Prologue"
                  subheader="Launch & impact">
                  <p>Since launching in 2021, Contour dashboard mode has driven decision making for many customers including:</p>
                  <ul>
                    <li>Afghanistan evacuations</li>
                    <li>COVID-related supply chain disruptions</li>
                    <li>Army readiness workflows</li>
                  </ul>
                  <p><a href="https://www.palantir.com/docs/foundry/contour/dashboards-overview/" target="_blank">Read full product documentation here↗</a></p>
                </ProjectSection>
              </Scroll.Element>

            </div>

            <div className="table-of-contents">
                <Link activeClass="active" smooth spy to="what-is-contour" className="toc-item muted-label">What is Contour?</Link>
                <Link activeClass="active" smooth spy to="what-is-reports" className="toc-item muted-label">What is Reports?</Link>
                <Link activeClass="active" smooth spy to="problems" className="toc-item muted-label">Problem definition</Link>
                <Link activeClass="active" smooth spy to="opportunity" className="toc-item muted-label">Opportunity</Link>
                <Link activeClass="active" smooth spy to="dashboard-mode" className="toc-item muted-label">Solution</Link>
                <Link activeClass="active" smooth spy to="adding-visualizations" className="toc-item muted-label">Adding visualizations</Link>
                <Link activeClass="active" smooth spy to="navigation-pattern" className="toc-item muted-label">Navigation pattern</Link>
                <Link activeClass="active" smooth spy to="interrogating-data" className="toc-item muted-label">Interrogating data</Link>
                <Link activeClass="active" smooth spy to="concurrent-editing" className="toc-item muted-label">Concurrent editing</Link>
                <Link activeClass="active" smooth spy to="design-system" className="toc-item muted-label">Design system</Link>
                <Link activeClass="active" smooth spy to="launch-and-impact" className="toc-item muted-label">Launch & impact</Link>
            </div>

            <Footer/>

          </div>
      </div>
    </Protect>
  );
}

export default DashboardModePage;
