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
        <Link to={this.props.link} className={classnames('project-preview', this.props.side)}>
          <div style={style} className="project-preview-img img-normal"></div>
          <div style={{display:"flex", flexDirection:"row"}}>
            <div style={{display:"flex", flexDirection:"column", width: "80%"}}>
              <h1>{this.props.name}</h1>
              <h2 style={{marginTop: "0px"}}>{this.props.description}</h2>
            </div>
              <h1 style={{marginLeft:"auto", opacity:"50%"}}>{this.props.tag}</h1>
          </div>
        </Link>
      );
  }
}

export default ProjectPreview
