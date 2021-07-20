import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from './components/Home';
import { Component } from 'react';
import CyberTruck from './components/CyberTruck';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/cybertruck" render={() => <CyberTruck />} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
