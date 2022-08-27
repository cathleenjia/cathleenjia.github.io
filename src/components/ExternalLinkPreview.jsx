import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../App.css';
import './project_preview.css';
import classnames from 'classnames';

class ExternalLinkPreview extends React.Component {

  render() {
      const { imgUrl } = this.props;
      const style = {
        backgroundImage: "url("+this.props.imgUrl+")",
      }

      return (
        <a href={this.props.link} className={classnames('project-preview', this.props.side)} target="blank">
          <div style={style} className="project-preview-img img-normal"></div>
          <div style={{display:"flex", flexDirection:"row"}}>
            <div style={{display:"flex", flexDirection:"column", width: "80%"}}>
              <h1>{this.props.name}</h1>
              <h2 style={{ marginTop: "0px"}}>{this.props.description}</h2>
            </div>
            <h2 style={{marginLeft:"auto"}}>{this.props.tag}</h2>
          </div>
        </a>
      );
  }
}

export default ExternalLinkPreview
