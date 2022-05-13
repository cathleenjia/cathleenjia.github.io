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
        <Link to={this.props.link} className={classnames('project_preview', this.props.side)}>
          <div style={style} className="project-preview-img img-normal"></div>
          <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex"}}>
              <h4 className="project-preview-title">{this.props.name}</h4>
              <h4 className="project-preview-title" style={{marginLeft:"auto", opacity:"50%"}}>{this.props.tag}</h4>
            </div>
            <p className="footer-label">{this.props.description}</p>
          </div>
        </Link>
      );
  }
}

export default ProjectPreview
