import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import '../App.css';
import './footer.css';
import classnames from 'classnames';

class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className="footer">
        <hr class="solid-divider"/>
        <div className="footer-wrapper">
          <div className="footer-column">
            <Link to ="/"><h1>See all work ↗</h1></Link>
            <Link to ="/about"><h1>About ↗</h1></Link>
          </div>
          <div className="footer-contact">
            <div className="footer-column" style={{marginLeft:"100px"}}>
              <h2>Email</h2>
              <h1>cathleenmjia@gmail.com</h1>
            </div>
            <div className="footer-column" style={{marginLeft:"100px"}}>
              <h2>Connect</h2>
              <a href="https://drive.google.com/file/d/1ES-_zzWihbfAhlmQkIVJu2RlbRYgnt-T/view?usp=sharing" target="_blank"><h1>Resume</h1></a>
              <a href="https://www.linkedin.com/in/cathleenjia/" target="_blank"><h1>LinkedIn</h1></a>
              <a href="https://github.com/cathleenjia" target="_blank"><h1>Github</h1></a>
            </div>
          </div>
        </div>
        </div>
      );
  }
}

export default Footer
