
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import About from './components/About/About';
import Project from './components/Project/Project';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/service" activeClassName="active">
            Service
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/project" activeClassName="active">
            Project
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="active">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const Routes = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/service" component={Service} />
        <Route path="/about" component={About} />
        <Route path="/project" component={Project} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
