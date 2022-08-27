import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import '../App.css';
import './nav_bar.css';
import classnames from 'classnames';

class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    }
  }

  toggleMenu = () => {
    if (this.state.open) {
      this.setState({open: false})
    } else {
      this.setState({open: true})
    }
  }

  render() {
      const { open } = this.state;

      return (
        <div className="nav">
          <Link to ="/"><h4 className="inverse">Cathleen Jia</h4></Link>
          <div className="nav-menu">
            <Link to ="/" className="nav-item"><h4 className="inverse">Work</h4></Link>
            <Link to ="/about" className="nav-item"><h4 className="inverse">About</h4></Link>
          </div>
        </div>
      );
  }
}

export default NavBar
