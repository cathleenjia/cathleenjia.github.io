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

function HelpAndSupportPage() {
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
                  <h2>Help & Support</h2>
                </div>

                <div className="project-description">
                  <p>Set the long term vision for support workflows in Foundry, Palantir’s platform for connecting, transforming, analyzing, and operationalizing data.</p>

                  <div className="project-metadata">
                    <p className="muted-label">Team</p>
                    <p>1 product manager</p>
                  </div>

                  <div className="project-metadata">
                    <p className="muted-label">Timeline</p>
                    <p>Oct - Dec 2021</p>
                  </div>
                </div>

              </div>

              <ProjectImg imgUrl={require("../assets/homepointr/help-splash.png")} height="64%" position="-10% 70%" size="100%"/>

              <Scroll.Element name="01">
                <ProjectSection
                  header="01 - Context"
                  subheader="Support today">
                  <p>Today, help and support in Foundry looks like reading documentation or filing an issue. Foundry deployments commonly maintain multiple sources of documentation: documentation written and managed by product teams and custom documentation written and managed by forward deployed Palantirians and customer teams. Without a single source of knowledge, many users resort to filing issues, which can be filed through a few different channels: via the Help center, in-app help menus, or directly from the Issues inbox. </p>
                  <div className="column-65-30">
                    <div className="column-65">
                      <ProjectImg imgUrl={require("../assets/homepointr/help-center.png")} height="56%" position="-10% 70%" size="100%"/>
                    </div>
                    <div className="column-30">
                      <p>The Help Center is the central hub for contextual help about the application currently in use. It contains quick links to documentation and open issues (by the user) for the relevant product.</p>
                    </div>
                  </div>
                  <div className="column-65-30">
                    <div className="column-65">
                      <ProjectImg imgUrl={require("../assets/homepointr/filing-flow.gif")} height="56%" position="-10% 70%" size="100%"/>
                    </div>
                    <div className="column-30">
                      <p>Issues currently supports a few different inquiry types: data quality, permission inquiry, etc </p>
                    </div>
                  </div>
                  <div className="column-65-30">
                    <div className="column-65">
                      <ProjectImg imgUrl={require("../assets/homepointr/issues-app.png")} height="56%" position="-10% 70%" size="100%"/>
                    </div>
                    <div className="column-30">
                      <p>The Issues app is an inbox for all issues created at a specific deployment. It primarily acts as the management tool for supporters to track and resolve issues. However, it is also where end users go to follow up on issues they’ve created. </p>
                    </div>
                  </div>
                </ProjectSection>
              </Scroll.Element>

              <Scroll.Element name="02">
                <ProjectSection
                  header="02 - Context"
                  subheader="User profiles">
                  <p>There are a number of players to consider in the Foundry eco-system.</p>
                  <div className="column-wrapper-50-50">
                    <div className="column-50-50">
                      <h4>Palantir</h4>
                      <ul>
                        <li><b>Product teams</b>: PMs, designers, and developers that build product</li>
                        <li><b>eBaseline</b>: Palantir customer support team</li>
                        <li><b>Forward deployed engineers (FDEs)</b>: consultant-like engineers dedicated to a single Foundry deployment at a time, commonly building custom solutions outside of the product team.</li>
                      </ul>
                    </div>
                    <div className="column-50-50">
                      <h4>Customers</h4>
                      <ul>
                        <li><b>Builders</b>: technical customers who use Foundry to build solutions for consumer users</li>
                        <li><b>Consumers</b>: less technical customers who use solutions built for them out in the field</li>
                        <li><b>Customer support teams</b>: customers who are trained to help resolve issues</li>
                      </ul>
                    </div>
                  </div>
                </ProjectSection>
              </Scroll.Element>

              <Scroll.Element name="03">
                <ProjectSection
                  header="03 - Context"
                  subheader="Product evolution">
                  <p>When Palantir first started, the company’s business strategy was to build custom solutions for nearly every single customer. But as the business scaled, the company needed to take an increasingly product first approach. While Palantir’s unique value add still largely hinges on its ability to build custom solutions, the product needs to evolve to become more walk up usable with less support from forward deployed engineers. </p>
                </ProjectSection>
              </Scroll.Element>

              <Scroll.Element name="04">
                <ProjectSection
                  header="04 - Decomp"
                  subheader="Research">
                  <p>My PM and I met with several FDE teams and eBaseline to understand what each of their support setups look like.</p>
                </ProjectSection>
              </Scroll.Element>

              <Scroll.Element name="05">
                <ProjectSection
                  header="05 - Decomp"
                  subheader="Insights">
                  <p>We found that although most deployments had very unique setups, most shared one thing in common: some version of a triaging system that hinges on whether or not an issue is specific to a custom built use case.</p>
                  <div className="column-wrapper-50-50">
                    <div className="column-50-50">
                      <ProjectImg imgUrl={require("../assets/homepointr/Reddy.png")} height="136%" position="-10% 70%" size="100%"/>
                    </div>
                    <div className="column-50-50">
                      <ProjectImg imgUrl={require("../assets/homepointr/Jenner.png")} height="136%" position="-10% 70%" size="100%"/>
                    </div>
                  </div>
                  <p>Because the product doesn’t differentiate use case specific support and generic product support:</p>
                  <ul>
                    <li>It is unclear to a customer user what parts of the product are custom solutions and which are not, leading to many misfiled issues and a need for a manual triaging system.</li>
                    <li>There is no way to hide inquiry types specific to custom built solutions. This has made it impossible to collect feedback about bugs at deployments that have chosen to turn off Issues entirely. </li>
                    <li>The security model is the same for both FDE supporters and eBaseline supporters. This means that eBaseline often does not have the correct permissions to help resolve issues because they are not and should not be set up on each customer stack by default. </li>
                    <li>All inquiry types are treated with the same level of prominence, which has set user expectations for support services very high, making it difficult to upsell support and dial back Palantir engagement. </li>
                  </ul>
                </ProjectSection>
              </Scroll.Element>

              <Scroll.Element name="06">
                <ProjectSection
                  header="06 - Decomp"
                  subheader="Opportunity">
                  <p>How might we start to differentiate generic support and customer specific support?</p>
                </ProjectSection>
              </Scroll.Element>

              <Scroll.Element name="07">
                <ProjectSection
                  header="07 - Define"
                  subheader="Solution">
                  <p>The solution points clearly to separating out the two types of support:</p>
                  <div className="column-wrapper-50-50">
                    <div className="column-50-50">
                      <h4>1. Generic Foundry Support</h4>
                      <p>Support that is relevant to Foundry as platform where customer context is not required.</p>
                      <ul>
                        <li>Reporter: primarily customer builders</li>
                        <li>Assignee: eBaseline (or product teams)</li>
                        <li>Inquiry types:</li>
                        <ul>
                          <li>Bug reports</li>
                          <li>Feature requests</li>
                          <li>Product questions (ie. “How do I ingest data”)</li>
                        </ul>
                        <li>Documentation: docs for apps built by the product team, available to all customers</li>
                      </ul>
                    </div>
                    <div className="column-50-50">
                      <h4>2. Customer Specific Support</h4>
                      <p>Support where customer context is required. These include support for customer specific applications, data, and permissioning.</p>
                      <ul>
                        <li>Reporter: customer builders and consumers</li>
                        <li>Assignee:</li>
                        <ul>
                          <li>Forward deployed engineers</li>
                          <li>Customer support teams</li>
                          <li>Customer builders</li>
                        </ul>
                        <li>Issue examples:</li>
                        <ul>
                          <li>“I don’t know how to use this custom dashboard”</li>
                          <li>“The data looks wrong here”</li>
                          <li>“I don’t have access to this file”</li>
                        </ul>
                        <li>Documentation: docs for custom built apps</li>
                      </ul>
                    </div>
                  </div>
                </ProjectSection>
              </Scroll.Element>

              <Scroll.Element name="08">
                <ProjectSection
                  header="08 - Long term design proposal"
                  subheader="Two separate Help Centers">
                  <div className="column-wrapper-50-50">
                    <div className="column-50-50">
                      <h4>1. Generic Foundry Help Center</h4>
                      <p>One click into the “help icon” via the sidebar, overlapping screen content to break context, signifying that Generic Foundry Support does not require customer context.</p>
                      <ul>
                        <li>Surfaces product team authored documentation, tutorials, and other resources</li>
                        <li>Button to file an issue about the Foundry platform (i.e. bug report, feature request, or product question)</li>
                      </ul>
                    </div>
                    <div className="column-50-50">
                      <h4>2. Customer Specific Help Center</h4>
                      <p>New tab inside context aware details panel to be more ingrained and ubiquitous, signifying that this type of support is directly relevant to the context.</p>
                      <ul>
                        <li>Surfaces custom written documentation, tutorials, and other resources</li>
                        <li>Button to file a use-case specific issue </li>
                      </ul>
                    </div>
                  </div>
                  <ProjectImg imgUrl={require("../assets/homepointr/help-centers.png")} height="61%" position="-10% 70%" size="100%"/>
                  <div className="column-65-30">
                    <div className="column-65">
                      <ProjectImg imgUrl={require("../assets/homepointr/carbon-help-center.png")} height="61%" position="-10% 70%" size="100%"/>
                    </div>
                    <div className="column-30">
                      <h4>Carbon users</h4>
                      <p>Carbon, a lite version of Foundry built for consumer users, also has an existing context aware panel that a new help center can be added to.</p>
                    </div>
                  </div>
                </ProjectSection>
              </Scroll.Element>

              <Scroll.Element name="09">
                <ProjectSection
                  header="09 - Long term design proposal"
                  subheader="The context aware Help Center">
                  <p>The context aware Help Center integrates elegantly with:</p>
                  <div className="column-65-30">
                    <div className="column-65">
                      <ProjectImg imgUrl={require("../assets/homepointr/compass-primitives.gif")} height="61%" position="-10% 70%" size="100%"/>
                    </div>
                    <div className="column-30">
                      <h4>The file system</h4>
                      <p>Leverage the file system to add more organizational hierarchy to customer specific support content (ie. custom documentation and issues).</p>
                    </div>
                  </div>
                  <div className="column-65-30">
                    <div className="column-65">
                      <ProjectImg imgUrl={require("../assets/homepointr/custom-docs.gif")} height="61%" position="-10% 70%" size="100%"/>
                    </div>
                    <div className="column-30">
                      <h4>The permissions system</h4>
                      <p>Leverage the permissions system so editors can add custom documentation for:</p>
                      <ul>
                        <li>Consumers of the artifact</li>
                        <li>Other editors to maintain the artifact (ie. how to get started using this artifact)</li>
                      </ul>
                    </div>
                  </div>
                </ProjectSection>
              </Scroll.Element>

              <Scroll.Element name="10">
                <ProjectSection
                  header="10 - Long term design proposal"
                  subheader="Generic Foundry Issues">
                <p>Divorce Generic Foundry issues from the existing issues inbox and move them into product documentation to:</p>
                <ul>
                  <li>Paint a more cohesive picture of Generic Foundry Support</li>
                  <li>Build a knowledge base that will enable users to unblock themselves before contacting Palantir for support</li>
                  <li>Build a better security model where eBaseline does that have access to customr stacks by default and must request access to a specific artifact</li>
                </ul>
                <ProjectImg imgUrl={require("../assets/homepointr/generic-support-inbox.gif")} height="60.5%" position="-10% 70%" size="100%"/>
                </ProjectSection>
              </Scroll.Element>

              <Scroll.Element name="11">
                <ProjectSection
                  header="11 - Long term design proposal"
                  subheader="Customer Specific Issues">
                <p>Even after we scope down the focus of the existing issues app to just customer specific issues, there are still several different user types that would continue using this tool:</p>
                <ul>
                  <li>Builders who are responsible for maintaining a few resources or pipelines</li>
                  <li>Customer support teams that are responsible for L1 support triaging</li>
                </ul>
                <p>Notably, forward deployed enginneers rarely use the in product issues app entrypoint; they often, instead, use a bookmarked link that has a saved series of filters already applied. Based on this set of needs, we should redesign the issues inbox in a way that would allow users to create <u>personalized inbox views</u> by saving a set of filters, sorts, and column properties.</p>
                <ProjectImg imgUrl={require("../assets/homepointr/specific-support-inbox.gif")} height="60.5%" position="-10% 70%" size="100%"/>
                <p>Alternatively, Foundry should prioritize building better third party integrations with an existing ticket tracking product, like Jira, since this workflow is that primary selling point of Foundry. </p>
                </ProjectSection>
              </Scroll.Element>

              <Scroll.Element name="12">
                <ProjectSection
                  header="12 - Prologue"
                  subheader="What's next">
                <ul>
                  <li>The existing issues app is winding down to maintenance only.</li>
                  <li>Building a Generic Foundry Issues inbox has been roadmapped for the upcoming term.</li>
                </ul>
                </ProjectSection>
              </Scroll.Element>

            </div>

            <div className="table-of-contents">
                <Link activeClass="active" smooth spy to="01" className="toc-item muted-label">Support today</Link>
                <Link activeClass="active" smooth spy to="02" className="toc-item muted-label">User profiles</Link>
                <Link activeClass="active" smooth spy to="03" className="toc-item muted-label">Product evolution</Link>
                <Link activeClass="active" smooth spy to="04" className="toc-item muted-label">Research</Link>
                <Link activeClass="active" smooth spy to="05" className="toc-item muted-label">Insights</Link>
                <Link activeClass="active" smooth spy to="06" className="toc-item muted-label">Opportunity</Link>
                <Link activeClass="active" smooth spy to="07" className="toc-item muted-label">Solution</Link>
                <Link activeClass="active" smooth spy to="08" className="toc-item muted-label">Two separate Help Centers</Link>
                <Link activeClass="active" smooth spy to="09" className="toc-item muted-label">The context aware help center</Link>
                <Link activeClass="active" smooth spy to="10" className="toc-item muted-label">Generic Foundry Issues</Link>
                <Link activeClass="active" smooth spy to="11" className="toc-item muted-label">Customer specific Issues</Link>
                <Link activeClass="active" smooth spy to="12" className="toc-item muted-label">What's next</Link>
            </div>

            <Footer/>

          </div>
      </div>
    </Protect>
  );
}

export default HelpAndSupportPage;
