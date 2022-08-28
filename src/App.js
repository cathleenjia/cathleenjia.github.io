import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/slate-multipage-apps" component={SlateMultipageAppsPage} />
          <Route path="/contour-dashboards" component={DashboardModePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
