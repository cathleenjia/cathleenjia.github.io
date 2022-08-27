import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import ProjectPreview from "./components/ProjectPreview"

import Home from "./pages/Home"
import SlateMultipageAppsPage from "./pages/SlateMultipageAppsPage"
import DashboardModePage from "./pages/DashboardModePage"
import AboutPage from "./pages/AboutPage"
import ScrollToTop from "./ScrollToTop"



function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/slate-multipage-apps" component={SlateMultipageAppsPage} />
        <Route path="/contour-dashboards" component={DashboardModePage} />
        <Route path="/about" component={AboutPage} />
      </div>
    </Router>

  );
}

export default App;
