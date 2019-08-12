import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link, NavLink} from "react-router-dom";
import logo from './images/logo.png';
import navbar_top from './images/navbar_top.png';
import {Home} from './pages/home.js';
import {News} from './pages/news.js';
import {Services} from './pages/services.js';
import {NewsPage} from './pages/newsPage.js';
import {ServicePage} from './pages/servicePage.js';
import {Mission} from './pages/mission.js';
import {Management} from './pages/management.js';
import {Markets} from './pages/markets.js';
import {Partners} from './pages/partners.js';
import {WhyUs} from './pages/whyUs.js';
import {Technology} from './pages/technology.js';
import {TechnologyPage} from './pages/technologyPage.js';
import {Contact} from './pages/contact.js';
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
                  <li class="heading"><NavLink to={'/News'} className="nav-link" style={this.styles.link}>News</NavLink></li>
                  <li class="heading"><NavLink to={'/Services'} className="nav-link" style={this.styles.link}>Services</NavLink></li>
                  <li class="heading"><NavLink to={'/Technology'} className="nav-link" style={this.styles.link}>Technologies</NavLink></li>
                  <li class="heading"><div class="dropdown align-this-dropdown">
                        <button class="btn btn-secondary dropdown-toggle heading" 
                                style={{backgroundColor: 'white', color: 'grey', borderColor: 'white'}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          About
                        </button>
                        <div class="dropdown-menu pull-left" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item no-hover-underline" href="/About/Mission" style={{fontSize: 15}}><Link class="no-hover-underline" to={'/About/Mission'}>Our Mission</Link></a>
                          <a class="dropdown-item no-hover-underline" href="/About/Management" style={{fontSize: 15}}><Link class="no-hover-underline" to={'/About/Management'}>Management Team</Link></a>
                          <a class="dropdown-item no-hover-underline" href="/About/Markets" style={{fontSize: 15}}><Link class="no-hover-underline" to={'/About/Markets'}>Markets Served</Link></a>
                          <a class="dropdown-item no-hover-underline" href="/About/Partners" style={{fontSize: 15}}><Link class="no-hover-underline" to={'/About/Partners'}>Partners</Link></a>
                          <a class="dropdown-item no-hover-underline" href="/About/WhyUs" style={{fontSize: 15}}><Link class="no-hover-underline" to={'/About/WhyUs'}>Why AGT?</Link></a>                        </div>
                      </div></li>
                  <li class="heading"><NavLink to={'/Contact'} className="nav-link" style={this.styles.link}>Contact</NavLink></li>
                </ul>
              </div>
            </div>
          </nav>
          <hr className="mt-0"/>
          <Switch>
            <Route path='/address_sugarland' component={() => { 
                window.location.href = 'https://goo.gl/maps/J9EKkRi5LgT2'; 
                return null;
            }}/>
            <Route path='/address_beijing' component={() => { 
                window.location.href = 'https://goo.gl/maps/909cp'; 
                return null;
            }}/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/News' component={News}/>
            <Route exact path='/Services' component={Services}/>
            <Route exact path='/Technology' component={Technology}/>
            <Route exact path='/NewsPage' component={NewsPage}/>
            <Route exact path='/NewsPage/:id' component={NewsPage}/>
            <Route exact path='/ServicePage' component={ServicePage}/>
            <Route exact path='/ServicePage/:id' component={ServicePage}/>
            <Route exact path='/TechnologyPage' component={TechnologyPage}/>
            <Route exact path='/TechnologyPage/:id' component={TechnologyPage}/>
            <Route exact path='/About/Mission' component={Mission}/>
            <Route exact path='/About/Management' component={Management}/>
            <Route exact path='/About/Markets' component={Markets}/>
            <Route exact path='/About/Partners' component={Partners}/>
            <Route exact path='/About/WhyUs' component={WhyUs}/>
            <Route exact path='/Contact' component={Contact}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

function App() {
  return (
    <React.Fragment>
    <NavBar/>
    </React.Fragment>
  );
}

export default App;
