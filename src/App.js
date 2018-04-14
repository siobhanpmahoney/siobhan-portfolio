import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Portfolio from './components/Portfolio'
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink, Link, withRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <NavBar />
        </div>

          <Route exact path="/" render={() => <LandingPage /> } />

          <Route exact path="/portfolio" render={() => <Portfolio /> } />
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
