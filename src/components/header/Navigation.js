import React, { Component } from 'react';
import { Link } from 'react-scroll';


class Navigation extends Component {
  render() {
    return (
      <nav className="nav-primary">
        <ul>

          <li><Link to="splash" spy={true} smooth={true} duration={500} activeClass="active">Home</Link></li>

          <li><Link to="services" spy={true} smooth={true} duration={500} activeClass="active">Services</Link></li>

          <li><Link to="work" spy={true} smooth={true} duration={500} activeClass="active">Work</Link></li>

          <li><Link to="contact" spy={true} smooth={true} duration={500} activeClass="active">Contact</Link></li>

          <li><a href="#">Blog</a></li>

          <li><a href="#">Project Planner</a></li>

        </ul>
      </nav>
    )
  }
}

export default Navigation;
