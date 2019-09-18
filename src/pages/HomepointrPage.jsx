import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as Scroll from 'react-scroll';

import '../App.css';
import '../components/project_page.css';
import ProjectImg from "../components/ProjectImg"
import ProjectSection from "../components/ProjectSection"
import NavBar from "../components/NavBar"
import TableOfContents from '../components/TableOfContents'

function HomepointrPage() {
  return (
    <div className="app project-page">
      <div className="main">
        <div className="app-header">
          <Link to ="/">
            <p className="nav-header link">&larr; Go back</p>
          </Link>
            <div className="project-title">
              <h1>Blueprint x Homepointr</h1>
            </div>
            <div className="project-description">
              <h3>Designed and developed a web app using React and Ruby on Rails for HomepointrCIC to help referral agencies match marginalized individuals with suitable housing.</h3>
              <p className="project-details"><b>Role:</b> Designer, Developer</p>
              <p className="project-details"><b>Team:</b> Blueprint</p>
            </div>
            <ProjectImg imgUrl={require("../assets/homepointr/overview.gif")} height="56.5%" position="40% 35%" size="103.8%"/>
            <Scroll.Element name="0">
              <ProjectSection
                header="01 - Context setting"
                subheader="HomePointrCIC is a non-profit based in Scotland aiming to improve access to suitable housing options.">
                <p>Every 18 minutes an entire household becomes homeless in Scotland. There were 39,110 long term (6+ months), private sector empty homes in Scotland in the 2017-18 year.</p>
                <p>The Housing (Scotland) Act 2001 introduced registered social landlords to assist local authorities in rehousing homeless people. The Homelessness Act 2003 outlined that anyone finding themselves homeless through no fault of their own must be entitled to settled accommodation (a council or housing association tenancy or private rental).</p>
                <p>The method of connecting referral agencies with housing providers is in need of reform. There are clearly efforts to address the issue homelessness and this is where Homepointr comes in. Their goal is to bridge the disconnect between referral agencies and landlords.</p>
              </ProjectSection>
            </Scroll.Element>
            <Scroll.Element name="1">
              <ProjectSection
                header="02 - Problem"
                subheader="There is no application process implemented.">
                <p>Too many forms leads to disorganization and risk of inaccuracies. Existing technology displays properties for referral agencies, but no application process implemented. Thus making communication difficult.</p>
              </ProjectSection>
            </Scroll.Element>
            <Scroll.Element name="2">
              <ProjectSection
                header="03 - Blueprint's solution"
                subheader="Matching system">
                <p>Streamline the data exchange processes between homeless individuals and care services. Referral agents will submit applications on behalf of clients, and landlords can manage these applications for each property.</p>
              </ProjectSection>
            </Scroll.Element>
            <Scroll.Element name="3">
              <ProjectSection
                header="04 - Landlords"
                subheader="Property creation and management">
                <p><b>Property creation</b></p>
                <p>Clean database of properties to simplify application process with multi-step form for a less intimidating experience.</p>
                <p><b>Review tenant applications</b></p>
                <p>View applications to interview or offer tenancy to clients. Expand card to view more details and paperwork.</p>
                <p><b>Manage properties</b></p>
                <p>Review pending applications and manage current clients. Easily track progress and status of properties and clients.</p>
              </ProjectSection>
            </Scroll.Element>
            <ProjectImg imgUrl={require("../assets/homepointr/property-creation.gif")} height="56.5%" position="40% 30%" size="100%"/>
            <Scroll.Element name="4">
              <ProjectSection
                header="05 - Referral agent"
                subheader="Client creation and application process">
                <p><b>Client creation</b></p>
                <p>Clean database of properties to simplify application process with multi-step form for a less intimidating experience.</p>
                <p><b>Browse and filter properties</b></p>
                <p>Easily find suitable housing arrangements with a filtering option.</p>
                <p><b>Application submission</b></p>
                <p>Submit applications for each property. Download and upload any additional forms.</p>
              </ProjectSection>
            </Scroll.Element>
            <ProjectImg imgUrl={require("../assets/homepointr/submit-app.gif")} height="56.5%" position="40% 30%" size="100%"/>
            <Scroll.Element name="5">
              <ProjectSection
                header="06 - Final product"
                subheader="You can visit it here: https://homepointr.herokuapp.com/">
                <p>Github repo link: https://github.com/calblueprint/HomePointrCIC</p>
              </ProjectSection>
            </Scroll.Element>
            <TableOfContents items={['Context', 'Problem', 'Solution', 'Landlords', 'Referral agent', 'Final product']}/>
        </div>

      </div>


      <NavBar email="cathleenjia@berkeley.edu"/>


  </div>
  );
}

export default HomepointrPage;
