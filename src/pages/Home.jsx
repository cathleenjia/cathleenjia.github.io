import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../App.css';
import '../components/canvas.css';
import ProjectPreview from "../components/ProjectPreview"
import NavBar from "../components/NavBar"
import Canvas from "../components/Canvas"


const OPACITY_STEPS = 20;
let timer = undefined;
let curr = 0;
let next = 1;
const BACKGROUND_COLORS = [['#F0E4DB', '#FFFFFF'], ['#769EE5', '#AFE6FB'], ['#D9C950', '#FEFB69'], ['#DF9D9B', '#F8DEDE'], ['#E9B484', '#FEFABF'], ['#D3674E', '#EF906F']];
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
    // this.setState(prevState => {
    //   let x = prevState.counter + 1;
    //   let y = prevState.anothercounter + 1;
    //   return { counter, anothercounter };
    // });
    // this.setState({x: e.clientX, y: e.clientY});
    this.drawDot(e.clientX, e.clientY, 0);
    // console.log("move " + opacityStep);
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
    if (this.ct !== undefined && this.state.numDots < 3750) {
      let opacity = (opacityStep/OPACITY_STEPS);

      if(opacityStep>OPACITY_STEPS-1){
        opacity=1;
      }


      this.ct.beginPath();
      this.ct.arc(x, y, 150, 0, 2 * Math.PI, false);

      this.ct.globalAlpha=opacity
      console.log(this.state.nextBackgroundColor);
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

      console.log(this.state.numDots);

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
      <div className="app" onMouseMove={this.handleMouseMove}>


        <div className="main">
          <header className="app-header">
            <p className="nav-header">Welcome</p>
            <div className="header-title">
              <h1 className="header1">Hello, I'm Cathleen!</h1>
              <h1 className="header1">I'm a designer who believes in creating beautifully engineered products to empower people.</h1>
              <Link to ='/about'><h1 className="header1 link" href="">More about me &rarr;</h1></Link>
            </div>
          </header>

          <div className="projects">
            <ProjectPreview name="Uber" description="Product design" imgUrl={require("../assets/uber-preview.png")} side="project_preview_left" link="/uber"/>
            <ProjectPreview name="Homepointr" description="Design/Development" imgUrl={require("../assets/homepointr-preview.png")} side="project_preview_right" link="/homepointr"/>
            <ProjectPreview name="Google" description="UX Engineering" imgUrl={require("../assets/google-preview.png")} side="project_preview_left" link="/googlepage"/>
            <ProjectPreview name="Build the Future" description="Branding/Development" imgUrl={require("../assets/build-the-future-preview.png")} side="project_preview_right" link="/buildthefuture"/>
          </div>
        </div>


        <NavBar email="cathleenjia@berkeley.edu"/>
        <div className={`background-circle ${this.state.numDots > 3000 ? 'grow-circle' : ''}`} style={{backgroundColor: this.state.nextBackgroundColor[0]}}/>
      </div>
      </>
    );
  }
}

export default Home;
