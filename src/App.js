import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Contact from './components/Contact'
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink, Link, withRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

          <NavBar />


          <Route exact path="/" render={() => <LandingPage /> } />

          <Route exact path="/portfolio" render={() => <Portfolio /> } />
          <Route exact path="/blog" render={() => <Blog /> } />
          <Route exact path="/contact" render={() => <Contact /> } />
        <section className="footer">
          <Footer />
        </section>
      </div>
    );
  }
}

export default withRouter(App);
