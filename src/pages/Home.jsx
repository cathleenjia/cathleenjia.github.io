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



{/*const OPACITY_STEPS = 20;
let timer = undefined;
let curr = 0;
let next = 1;
const BACKGROUND_COLORS = [['#FFFFFF', '#F0E4DB'], ['#dbafaf', '#fc827e'], ['#AFE6FB', '#769EE5'], ['#D9C950', "#b0a130"], ['#FEFABF', '#E9B484'], ['#EF906F', '#D3674E']];
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

  render() { */}

  function Home() {

    return (
      <>
      <ScrollToTop />
      {/*<div className="background" style={{backgroundColor: this.state.currBackgroundColor[0]}}></div>
      <Canvas className="canvas" setContext={this.setContext}/>
      <div onMouseMove={this.handleMouseMove}>*/}
      <div style={{backgroundColor: "#ffffff"}}>
        <div className="home-wrapper">


            <NavBarV2/>
            <div className="home-block">
              <h1>Cathleen Jia is a product designer based in San Francisco, currently working at Palantir.</h1>
            </div>

            <p>Select work↘</p>
            <hr class="solid-divider"/>

            <div className="projects">
              <ProjectPreview name="🔒&nbsp; Palantir &mdash; Slate multipage applications" description="Enabling app developers to build well-architected multipaged applications more easily" imgUrl={require("../assets/dashboard-preview.png")} side="project-preview-left" link="/slate-multipage-apps"/>
              <ProjectPreview name="🔒&nbsp; Palantir &mdash; Contour dashboards" description="Enabling data analysts to seamlessly build dashboards that stakeholders can confidently rely on" imgUrl={require("../assets/help-and-support-preview.png")} side="project-preview-right" link="/contour-dashboards"/>
              <ExternalLinkPreview name="Uber &mdash; Lifetime points" description="Improving driver long term retention" tag="See deck↗️" imgUrl={require("../assets/uber-preview.png")} side="project-preview-left" link="https://docs.google.com/presentation/d/1evs8jAIljBzWC-IygrwL09F1eJbYhNLZs9v_tkxx5K0/edit?usp=sharing"/>
              <ExternalLinkPreview name="Google &mdash; Omnisearch" description="Designed and developed experimental feature" tag="See deck↗️" imgUrl={require("../assets/google-preview.png")} side="project-preview-right" link="https://docs.google.com/presentation/d/1DpGWyq0C0SWj-vsyaT3rZbNqnxvuHtmA1YmeeqCK9-U/edit?usp=sharing"/>
            </div>

            <Footer/>

          </div>

        </div>
        {/*<div className={`background-circle ${this.state.numDots > 3000 ? 'grow-circle' : ''}`} style={{backgroundColor: this.state.nextBackgroundColor[0]}}/>*/}
      </>
    );
  }
{/*}*/}

export default Home;
