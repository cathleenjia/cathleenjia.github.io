import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../App.css';
import '../components/canvas.css';
import ProjectPreview from "../components/ProjectPreview"
import ExternalLinkPreview from "../components/ExternalLinkPreview"
import NavBarV2 from "../components/NavBarV2"
import Footer from "../components/Footer"
import Canvas from "../components/Canvas"
import ScrollToTop from "../ScrollToTop"



const OPACITY_STEPS = 20;
let timer = undefined;
let curr = 0;
let next = 1;
const BACKGROUND_COLORS = [['#FFFFFF', '#F0E4DB'], ['#AFE6FB', '#769EE5'], ['#dbafaf', '#fc827e'], ['#D9C950', "#b0a130"], ['#FEFABF', '#E9B484'], ['#EF906F', '#D3674E']];
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.ct = undefined;
    this.state = {
      x: -200,
      y: -200,
      numDots: 0,
      currBackgroundColor: BACKGROUND_COLORS[curr],
      nextBackgroundColor: BACKGROUND_COLORS[next],
    }
  }

  handleMouseMove = (e) => {
    const { target } = e;
    this.drawDot(e.clientX, e.clientY, 0);
  }

  changeBackgroundColor = () => {
    if (curr == BACKGROUND_COLORS.length-1) {
      curr = 0;
    } else {
      curr++;
    }
    if (next == BACKGROUND_COLORS.length-1) {
      next = 0;
    } else {
      next++;
    }
    this.setState({currBackgroundColor: BACKGROUND_COLORS[curr], nextBackgroundColor: BACKGROUND_COLORS[next], numDots: 0});
  }

  drawDot = (x, y, opacityStep) => {
    if (this.ct !== undefined && this.state.numDots < 3750) {
      let opacity = (opacityStep/OPACITY_STEPS);

      if(opacityStep>OPACITY_STEPS-1){
        opacity=1;
      }


      this.ct.beginPath();
      this.ct.arc(x, y, 150, 0, 2 * Math.PI, false);

      this.ct.globalAlpha=opacity
      this.ct.fillStyle = this.state.nextBackgroundColor[0];
      this.ct.fill();
      this.ct.lineWidth = 5;

      this.ct.globalAlpha=1-opacity;
      this.ct.fillStyle = this.state.nextBackgroundColor[1];
      this.ct.fill();
      this.ct.lineWidth = 5;

      this.ct.globalAlpha=1.00;

      this.setState(prevState => {
        let numDots = prevState.numDots + 1;
        return { numDots }
      })

      if (opacityStep >= OPACITY_STEPS) {
        clearTimeout(timer);
        return;
      }
      timer = requestAnimationFrame(() => this.drawDot(x,y, opacityStep + 1), 1000);
    } else {
      this.changeBackgroundColor();
      this.ct.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
  }



  setContext = (ctx) => {
    this.ct = ctx;
  }

  render() {

    return (
      <>
      <ScrollToTop />
      <div className="background" style={{backgroundColor: this.state.currBackgroundColor[0]}}></div>
      <Canvas className="canvas" setContext={this.setContext}/>
      <div onMouseMove={this.handleMouseMove}>
        <div className="home-wrapper">


            <NavBarV2/>
            <header className="home-intro">
                  <span className="intro-suisseintl">Cathleen Jia is a </span>
                <span className="intro-tag">✹ product designer</span>
                <span className="intro-romanabt"> & aspiring artist</span>
                <span className="intro-romanabt"> currently based in San Francisco</span>

                {/* <Link to ='/about'><h1 className="header1 link" href="">More about me &rarr;</h1></Link> */}
            </header>

            <p>Select work↘</p>
            <hr class="solid-divider"/>

            <div className="projects">
              <ProjectPreview name="🔒  Palantir &mdash; Contour Dashboards" description="Designed MVP of presentation product in Foundry" imgUrl={require("../assets/dashboard-preview.png")} side="project_preview_left" link="/dashboardmode"/>
              <ProjectPreview name="🔒  Palantir &mdash; Help & Support" description="Designed long term help and support vision for Foundry" imgUrl={require("../assets/help-and-support-preview.png")} side="project_preview_right" link="/helpandsupport"/>
              <ExternalLinkPreview name="Uber &mdash; Lifetime points" description="Designed MVP of new rewards marketplace" tag="See deck↗️" imgUrl={require("../assets/uber-preview.png")} side="project_preview_left" link="https://docs.google.com/presentation/d/1evs8jAIljBzWC-IygrwL09F1eJbYhNLZs9v_tkxx5K0/edit?usp=sharing"/>
              <ExternalLinkPreview name="Google &mdash; Omnisearch" description="Designed and developed experimental feature" tag="See deck↗️" imgUrl={require("../assets/google-preview.png")} side="project_preview_right" link="https://docs.google.com/presentation/d/1DpGWyq0C0SWj-vsyaT3rZbNqnxvuHtmA1YmeeqCK9-U/edit?usp=sharing"/>
            </div>

            <Footer/>

          </div>

        </div>
        <div className={`background-circle ${this.state.numDots > 3000 ? 'grow-circle' : ''}`} style={{backgroundColor: this.state.nextBackgroundColor[0]}}/>
      </>
    );
  }
}

export default Home;
