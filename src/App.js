import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link, NavLink} from "react-router-dom";
import logo from './images/logo.png';
import navbar_top from './images/navbar_top.png';
import {Home} from './pages/home.js';
import {News} from './pages/news.js';
import './App.css';

class NavBar extends Component {
  styles = {
    link: {
      color: 'grey',
      fontSize: '25'
    },
    image: {
      height: '8vh',
      width: '100vw'
    }
  }
  render() {
    return(
      <Router>
        <div>
          <img src={navbar_top} alt="navtop" style={this.styles.image}/>
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <NavLink to={'/'} className="nav-link" style={this.styles.link}>
              <img src={logo} alt="Logo" className="mb-0 ml-3"/>
            </NavLink>
            <div className="col mb-0">
              <br/><br/><br/>
              <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto list-unstyled mt-5">
                  <li><NavLink to={'/News'} className="nav-link" style={this.styles.link}>News</NavLink></li>
                  <li><NavLink to={'/Services'} className="nav-link" style={this.styles.link}>Services</NavLink></li>
                  <li><NavLink to={'/Technologies'} className="nav-link" style={this.styles.link}>Technologies</NavLink></li>
                  <li><NavLink to={'/About'} className="nav-link" style={this.styles.link}>About</NavLink></li>
                  <li><NavLink to={'/Contact'} className="nav-link" style={this.styles.link}>Contact</NavLink></li>
                </ul>
              </div>
            </div>
          </nav>
          <hr className="mt-0"/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/News' component={News}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

function App() {
  return (
    <NavBar/>
  );
}

export default App;
