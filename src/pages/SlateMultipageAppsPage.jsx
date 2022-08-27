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

function SlateMultipageAppsPage() {
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
                <h2>Slate Multipage Applications</h2>
              </div>
              <div className="column-right">
                <p>Designed and shaped product direction for a new workstream in Palantir’s app building product that is modeled after React Router to enable app developers to build well-architected multipage apps more easily.</p>
                <div className="project-metadata">
                  <h5>Team</h5>
                  <p>1 product manager<br />
                  2 developers
                  </p>
                </div>
                <div className="project-metadata">
                  <h5>Timeline</h5>
                  <p>Oct - Dec 2021</p>
                </div>
              </div>
            </div>


            <ProjectImg imgUrl={require("../assets/slatemultipage/slateHeroImage.png")} height="57%" position="-10% 70%" size="100%"/>


            <div className="project-block">
              <div className="column-left">
                <h2>Context</h2>
              </div>
              <div className="column-right">
                <p>Slate is Palantir’s click and point web app builder. The company wanted to attract more developers to the Foundry platform and increase usage with more powerful customization.</p>
                <p>This workstream is called Slate multipage support. A new feature set that allows app developers to add multiple pages to their applications in a first class way.</p>
                <p>I am the lead designer involved from discovery to today with the MVP in active development. The goal of this project was to enable app developers to build well-architected multipage applications more easily.</p>
              </div>
            </div>


            <div className="project-block">
              <div>
                <h3>What is Slate?</h3>
                <h2>Drag and drop web app builder</h2>
              </div>
            </div>


            <div className="project-block">
              <div className="column-left" />
              <div className="column-right">
                <p>Unlike other website builders, Slate enables users to build dynamic and responsive web apps with custom widgets, functions, and queries. </p>
              </div>
            </div>


            <ProjectImg imgUrl={require("../assets/slatemultipage/slateUI.png")} height="57%" position="30%" size="100%"/>


            <div className="project-block">
              <div>
                <h3>Business goal</h3>
                <h2>Attract more developers to Foundry platform and increase usage with more powerful customization</h2>
              </div>
            </div>


            <div className="project-block">
              <div className="column-left">
                <h2>Research</h2>
              </div>
              <div className="column-right">
                <p>Palantir has “implementation teams”, who own customer success, use cases, and relations for Palantir instances. Because Palantir’s customers often deal with sensitive data and customer relations are often delicate, product teams lean on “implementation teams” for customer signal.</p>
                <p>We chatted with 3 implementation team members from 3 different deployments to understand developer pain points and evaluate how multipage support could provide value to them.</p>
              </div>
            </div>


            <div className="project-block">
              <div className="column-left">
                <h2>Insights</h2>
              </div>
              <div className="column-right">
                <p><b>🧩&nbsp; Convoluted, hack-y solutions:&nbsp;</b> Suboptimal existing solutions: tabbed containers, iframing other Slate apps, and links</p>
                <ul>
                  <li>“There’s no easy way to add new pages to application.”</li>
                  <li>“There’s only one default navigation pattern available.”</li>
                </ul>
                <p><b>🤔&nbsp; Maintenance of large apps</b></p>
                <ul>
                  <li>“There’s a cognitive overload packed into the current interface: a single list of all widgets and a wingle list of each asset type.”</li>
                  <li>“Users tend to only come for help when they already have a document built with 5 tabbed containers and 150 widgets.”</li>
                  <li>“Most of the time if I break something, it’s easier to just start over scratch than to try and debug my application.”</li>
                </ul>
                <p><b>🐌&nbsp; Slow performance</b></p>
                <ul>
                  <li>“Opening and edit mode takes 10’x of seconds for everything to load and initalize.”</li>
                  <li>“Sometimes the load time is so bad, the application just becomes entirely unusable.”</li>
                </ul>
                <p><b>🏗&nbsp; Poorly architected apps:&nbsp;</b> Usually we see performance and maintenance issues when a code base was poorly designed.</p>
                <ul>
                  <li>“Slate developers build very incrementally. They don’t start out planning a big complex app, but they start falling into complexity as their colleagues and managers ask for more and more features.”</li>
                  <li>“Users generally don’t have architectural inclinations.”</li>
                  <li>“Slate needs to promote an information architecture that users will fall into as they build an app.”</li>
                </ul>
              </div>
            </div>


            <div className="project-block">
              <div>
                <h3>Design goal</h3>
                <h2>Enable app developers to build well-architected multipage applications more easily</h2>
              </div>
            </div>


            <div className="project-block">
              <div className="column-left">
              </div>
              <div className="column-right">
                <p>We're achieving this by:</p>
                <ol>
                <li>Improving today’s convoluted, hack-y solution by <b>introducing a first class experience for adding additional pages</b>.</li>
                <li>Improving maintainability of long-lived applications by <b>simplifying and rearchitecting the editor interface</b> to only display widgets and other assets that relevant to what’s being rendered in the canvas.</li>
                <li>Improve app building and general app usage performance by <b>adopting a React Router model</b>.</li>
              </ol>
              </div>
            </div>


            <div className="project-block">
              <div className="column-left">
                <h2>Design principles</h2>
              </div>
              <div className="column-right">
                <p><b>📖&nbsp; Ubiquitous and contextual education:&nbsp; </b>To help ease users into the new, muc more technical mental model (React Router)</p>
                <p><b>🧭&nbsp; Ubiquitous navigation:&nbsp; </b>To help users leverage new primitives without it turning into a blocker for speed and efficiency</p>
                <p><b>⚠️&nbsp; Minimal UI changes:&nbsp; </b>Only changes that are critical to minimal viable product</p>
              </div>
            </div>


            <div className="project-block">
              <div className="column-left">
                <h2>Terminology</h2>
              </div>
              <div className="column-right">
                <p>A few new primitives we're introducing with this workflow:</p>
                <ul>
                  <li><b>Route:&nbsp;</b> Widgets, functions, queries that are rendered together, where the name of the route matches a URL path. Routes can be nexted to indicate nested UI, which also correspond to a nested URL paths. (ie. /home)</li>
                  <li><b>Parent route:&nbsp;</b> Predecessor in a group of nested routes (ie. /home/profile)</li>
                  <li><b>Child route:&nbsp;</b> Nested route in a group of nested routes. Child routes inherit context from parent routes. (ie. /home/profile)</li>
                  <li><b>Local context:&nbsp;</b> Widgets, functions, queries scoped to the a singular route.</li>
                  <li><b>Parent context:&nbsp;</b> Widgets, functions, queries that are inherited from all parent routes.</li>
                  <li><b>Outlet container widget:&nbsp;</b> A new widget that specifically renders a child route. Determines position and display of chld routes. Metaphorically like a “hole” that child routes fill in.</li>
                </ul>
              </div>
            </div>


            <ProjectImg imgUrl={require("../assets/slatemultipage/slateTerminology.png")} height="30%" position="50%" size="100%"/>

            <div className="project-block">
              <div>
                <h3>Key workflows</h3>
                <h2>1.&nbsp;&nbsp; Create routes & child routes</h2>
              </div>
            </div>

            <div>
              <iframe
                src="https://www.youtube.com/embed/FQqYiXTr5ZM"
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
                <h2>2.&nbsp;&nbsp; Configure widgets, functions, etc</h2>
              </div>
            </div>

            <div>
              <iframe
                src="https://www.youtube.com/embed/Mg5Snb9wlXA"
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
                <h2>3.&nbsp;&nbsp; Navigation</h2>
              </div>
            </div>

            <div>
              <iframe
                src="https://youtube.com/embed/nN7QU6AVp7M"
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
                <h2>Iterations</h2>
              </div>
            </div>


            <ProjectImg imgUrl={require("../assets/slatemultipage/slateIterations.png")} height="70%" position="50%" size="100%"/>


            <div className="project-block">
              <div>
                <h2>Final design spec</h2>
              </div>
            </div>

            <ProjectImg imgUrl={require("../assets/slatemultipage/slateFinalSpec.png")} height="178%" position="50%" size="100%"/>


            <div className="project-block">
              <div className="column-left">
                <h3>Research</h3>
                <h2>Validate high level primitives and interactions</h2>
              </div>
              <div className="column-right">
                <p>Demo-ed prototypes to 6 different implementation team members:</p>
                <ul>
                  <li>3/6 had technical FE development experience</li>
                  <li>3/6 did not have much FE experience</li>
                </ul>
              </div>
            </div>


            <div className="project-block">
              <div className="column-left">
                <h2>Findings</h2>
              </div>
              <div className="column-right">
                <ol>
                  <li><b>The average Slate developer understands new primitives, but the new mental model will take some getting used to.</b></li>
                  <ul><br/>
                    <li>“Makes perfect sense.”</li>
                    <li>“Workflow makes sense; it’s a good way to structure Slate logic.”</li>
                    <li>“Took half way through the demo to wrap head around the primitives, but once I saw where you were going in the demo, it started making sense how everythign fits together.”</li>
                    <li>“Getting [users] to change their mental model to use pages may take effort.”</li>
                  </ul><br/>
                  <li><b>Users felt that this feature set would make building multipage applications easier.</b></li>
                  <ul><br/>
                    <li>“Really like it’s a first class way of doing tabbed containers which is really common.”</li>
                    <li>“Could really help with multitabbed and iframed large apps... Seems very clean and powerful.”</li>
                    <li>“I like how you can start to reuse components like the topnav.”</li>
                  </ul><br/>
                  <li><b>Users felt that this new model simplified and cleaned up the UI in a way that makes building and maintaining complex applications easier.</b></li>
                  <ul><br/>
                    <li>“[Customer] has the isssue that they don’t feel restricted about what they want to build, they’re restricted by maintenance complexity, and routes entirely solves that.”</li>
                    <li>“That’s actuallly super nice. [I like the handlebar selection UI, and that it splits the context information.]”</li>
                    <li>“The differentiation in the handlebar window is super useful and drives hom the idea of context.”</li>
                  </ul><br/>
                  <li><b>Technical users caught on to the performance benefits of this approach without explanation.</b></li>
                  <ul><br/>
                    <li>“How are the contents of the functsions tab being rendered [in relation to routes]?”</li>
                  </ul>
                </ol>
              </div>
            </div>


            <div className="project-block">
              <div className="column-left">
                <h2>Next steps</h2>
              </div>
              <div className="column-right">
                <ul>
                  <li>The MVP of this workstream is currently under-development.</li>
                  <li>We are currently planning onsite user testing with the MVP with a focus more on the usability side, rather than high level workflow validation.</li>
                </ul>
              </div>
            </div>


            <div className="project-block">
              <div className="column-left">
                <h2>On the horizon</h2>
              </div>
              <div className="column-right">
                <ul>
                  <li><b>New feature walkthrough:&nbsp;</b> Without the narration of my demos, this workflow might not be as straightforward. Design a new feature walkthrough to pair with the release of this new feature.</li>
                  <li><b>Template example:&nbsp;</b> Create a template that demonstrates best practices for building multipage applications.</li>
                  <li><b>Refactoring workflows:&nbsp;</b> Make it easier for users to refactor existing applications, including a warning dialog that informs the user of breaking changes when moving widgets, functions, and queries around between routes.</li>
                  <li><b>Layout panel + editor panel usability clean up:&nbsp;</b> Throughout this project, I’ve come across a lot of usability papercuts that I descoped (ie. fixing IA in editor panel).</li>
                  <li><b>Reusable components:&nbsp;</b> This is a highly requested feature that has only been somewhat solved by this multipage workstream. </li>
                  <li><b>Responsive design:&nbsp;</b> Today, container widgets and routes are not flex by default. This new model lends itself to responsive design. Help users create responsive applications more easily.</li>
                </ul>
              </div>
            </div>

          </div>
        <Footer/>

      </div>
      </div>
    </Protect>
  );
}

export default SlateMultipageAppsPage;
