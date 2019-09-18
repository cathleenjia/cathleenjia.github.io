import React from 'react';
import '../App.css';
import './project_page.css';
import ProjectPreview from "./ProjectPreview"
import NavBar from "./NavBar"


class ProjectImg extends React.Component {

  render() {
    const style = {
      backgroundImage: "url("+this.props.imgUrl+")",
      backgroundPosition: this.props.position,
      paddingTop: this.props.height,
      backgroundSize: this.props.size
    }

    return (
      <div style={style} className="project-img"></div>
    );
  }
}

export default ProjectImg;
