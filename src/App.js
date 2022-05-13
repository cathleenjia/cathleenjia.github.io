import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import ProjectPreview from "./components/ProjectPreview"

import Home from "./pages/Home"
import HelpAndSupportPage from "./pages/HelpAndSupportPage"
import DashboardModePage from "./pages/DashboardModePage"
import AboutPage from "./pages/AboutPage"
import ScrollToTop from "./ScrollToTop"



function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/helpandsupport" component={HelpAndSupportPage} />
        <Route path="/dashboardmode" component={DashboardModePage} />
        <Route path="/about" component={AboutPage} />
      </div>
    </Router>

  );
}

export default App;
