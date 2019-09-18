import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../App.css';
import './project_preview.css';
import classnames from 'classnames';

class ProjectPreview extends React.Component {

  render() {
      const { imgUrl } = this.props;
      const style = {
        backgroundImage: "url("+this.props.imgUrl+")",
      }

      return (
        <Link to ={this.props.link} className={classnames('project_preview', this.props.side)}>
          <div style={style} className="project-preview-img img-normal"></div>
          <h1 className="project-preview-title">{this.props.name} </h1>
          <h2 className="project-preview-description"> - {this.props.description}</h2>
        </Link>
      );
  }
}

export default ProjectPreview
