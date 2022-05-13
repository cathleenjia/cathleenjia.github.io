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

            <p className="muted-label">{this.props.header}</p>
            <h3>{this.props.subheader}</h3>

            <div>{this.props.children}</div>

          {/*{this.props.img && <p>{this.props.img}</p>}*/}

        </div>
      );
  }
}

export default ProjectSection
