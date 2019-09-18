import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../App.css';
import './project_preview.css';
import classnames from 'classnames';

class ProjectSection extends React.Component {
  render() {

    const style = {
      backgroundColor: this.props.background
    }

      return (
        <div style={style} className="project-section">
          <div className="section-headers">
            <p>{this.props.header}</p>
            <h2 className="section-subheader">{this.props.subheader}</h2>

          </div>
          <div className="section-content">
            <p>{this.props.children}</p>
          </div>
          {this.props.img && <p>{this.props.img}</p>}
        </div>
      );
  }
}

export default ProjectSection
