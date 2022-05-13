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
          <div className="footer-nav">
            <Link to ="/" className="footer-link">See all work ↗</Link>
            <Link to ="/about" className="footer-link">About ↗</Link>
          </div>
          <div className="footer-contact">
            <div className="footer-col">
              <p className="footer-label">Email</p>
              <p className="footer-text">cathleenmjia@gmail.com</p>
            </div>
            <div className="footer-col">
              <p className="footer-label">Connect</p>
              <a href="https://drive.google.com/file/d/1ES-_zzWihbfAhlmQkIVJu2RlbRYgnt-T/view?usp=sharing" className="footer-link" target="_blank">Resume</a>
              <a href="https://www.linkedin.com/in/cathleenjia/" className="footer-link" target="_blank">LinkedIn</a>
              <a href="https://github.com/cathleenjia" className="footer-link" target="_blank">Github</a>
            </div>
          </div>
        </div>
      );
  }
}

export default Footer
