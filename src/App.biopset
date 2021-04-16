import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import About from './pages/About';
import Trade from './pages/Trade';
import Write from './pages/Write';
import Settle from './pages/Settle';
import Biop from './pages/Biop';

import Intro from './components/Intro';
import Header from './components/Header';
import Copyright from './components/Copyright';

import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      {/* Start Wrapper */}
      <div id="wrapper" className="fade-in">
        <Route exact path="/"><Intro /></Route>
        <Header />
        {/* Start Nav */}
        <nav id="nav">
          <ul className="links">
            <Route exact path="/"><li><Link to="/">About</Link></li></Route>
            <Route path="/:id"><li><Link to="/trade">Trade</Link></li></Route>
            <Route path="/:id"><li><Link to="/write">Write</Link></li></Route>
            <Route path="/:id"><li><Link to="/settle">Settle</Link></li></Route>
            <Route path="/:id"><li><Link to="/biop">Biop</Link></li></Route>
          </ul>
          <ul className="icons">
            <li><a href="https://github.com/BIOPset" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="https://docs.biopset.com" className="icon solid fa-book"><span className="label">GitBook</span></a></li>
            <li><a href="https://twitter.com/biopset" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://discord.gg/4SRYBNdE3r" className="icon brands fa-discord"><span className="label">Discord</span></a></li>
            <li><a href="https://t.me/BIOPset" className="icon brands fa-telegram"><span className="label">Telegram</span></a></li>
          </ul>
        </nav>
        {/* End Nav */}
        {/* Start Main */}
        <div id="main">
          <Switch>
            <Route exact path="/"><About /></Route>
            <Route path="/Trade"><Trade /></Route>
            <Route path="/Write"><Write /></Route>
            <Route path="/Settle"><Settle /></Route>
            <Route path="/Biop"><Biop /></Route>
          </Switch>
        </div>
        {/* End Main */}
        <Copyright />
      </div>
      {/* End Wrapper */}
    </div>
  );
}

export default App;
