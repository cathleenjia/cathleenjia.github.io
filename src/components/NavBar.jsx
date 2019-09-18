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
        <div className="nav-bar">
          <div className="hamburger-menu" onClick={this.toggleMenu}>
            <div className={`${open ? 'menu-01-open' : 'menu-01-close'}`}/>
            <div className={`${open ? 'menu-02-open' : 'menu-02-close'}`}/>
          </div>
          <div className="menu-tapzone" onClick={this.toggleMenu}></div>
          <p className="nav-email">{this.props.email}</p>
          <div className={`${open ? 'menu-open' : 'menu'}`}>
            <div className="app">
              <div className="main">
              <Link to ="/" className="link" onClick={this.toggleMenu}><h1>Home</h1></Link>
              <Link to ="/about" className="link" onClick={this.toggleMenu}><h1>About</h1></Link>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default NavBar
