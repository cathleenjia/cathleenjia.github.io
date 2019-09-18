import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import ProjectPreview from "./components/ProjectPreview"

import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import UberPage from "./pages/UberPage"
import HomepointrPage from "./pages/HomepointrPage"
import GooglePage from "./pages/GooglePage"
import BuildtheFuturePage from "./pages/BuildtheFuturePage"
import AboutPage from "./pages/AboutPage"



function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/uber" component={UberPage} />
        <Route path="/homepointr" component={HomepointrPage} />
        <Route path="/googlepage" component={GooglePage} />
        <Route path="/buildthefuture" component={BuildtheFuturePage} />
        <Route path="/about" component={AboutPage} />
      </div>
    </Router>

  );
}

export default App;
