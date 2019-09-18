import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../App.css';
import './about_page.css';
import ProjectPreview from "../components/ProjectPreview"
import NavBar from "../components/NavBar"
import Canvas from "../components/Canvas"


const OPACITY_STEPS = 20;
let timer = undefined;
let curr = 0;
let next = 1;
const BACKGROUND_COLORS = [['#F0E4DB', '#FFFFFF'], ['#769EE5', '#AFE6FB'], ['#D9C950', '#FEFB69'], ['#DF9D9B', '#F8DEDE'], ['#E9B484', '#FEFABF']];
class AboutPage extends React.Component {
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
    // this.setState(prevState => {
    //   let x = prevState.counter + 1;
    //   let y = prevState.anothercounter + 1;
    //   return { counter, anothercounter };
    // });
    // this.setState({x: e.clientX, y: e.clientY});
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
    // this.setState(prevState => {
    //   let dotCoords = prevState.dotCoords.slice(0, prevState.dotCoords.length);
    //   dotCoords.push([<div className="dot" style={{left: x, top: y}}/>]);
    //   return { dotCoords }
    // })
    if (this.ct !== undefined && this.state.numDots < 5500) {
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

      // requestAnimationFrame(this.drawDot);
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
      <div className="background" style={{backgroundColor: this.state.currBackgroundColor[0]}}></div>
      <Canvas setContext={this.setContext}/>
      <div className="app">


        <div className="main">
          <header className="app-header">
          <Link to ="/" className="no-after">
            <p className="nav-header link">&larr; Go back</p>
          </Link>
          <div className="about-title">
            <h1 className="about-header">Hey there &mdash; I'm Cathleen!</h1>
            <img src={require("../assets/me.png")} className="me-img"></img>
          </div>
          <div className="about-description">
            <h3>I’m a strategic designer who believes that every design decision should be deliberate and data driven.</h3>
            <p>Currently, I am a senior at UC Berkeley majoring in cognitive science, and I plan to graduate in May 2020.</p>
            <p>With a background in CS, I am adept at designing within systems and at vastly different scales, executing bigger picture concepts as well as creating the fine details. To me craftsmanship in tech means deep empathy for people's needs, attention to the stories data have to tell, and mastery of the tools.</p>
            <h3>Experience</h3>
            <p className="project-details">Palantir &mdash; Product Design Intern, London, Fall 2019</p>
            <p className="project-details">Uber &mdash; Product Design Intern, San Francisco, Summer 2019</p>
            <p className="project-details">Google &mdash; UX Engineering Intern, New York, Summer 2018</p>
            <a href="https://www.linkedin.com/in/cathleenjia/" className="link" target="_blank"><h1>LinkedIn</h1></a>
            <a href="https://github.com/cathleenjia" className="link" target="_blank"><h1>Github</h1></a>


          </div>
          </header>

        </div>


        <NavBar email="cathleenjia@berkeley.edu"/>
        <div className={`background-circle ${this.state.numDots > 5000 && this.state.numDots < 5500 ? 'grow-circle' : 'shrink-circle'}`} style={{backgroundColor: this.state.nextBackgroundColor[0]}}/>
      </div>
      </>
    );
  }
}

export default AboutPage;
