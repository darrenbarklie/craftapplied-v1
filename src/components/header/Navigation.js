import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';

class Navigation extends Component {
  render() {
    return (
      <Col lg={4} md={4} sm={8} xs={12} className="navigation-wrapper">
        <nav className="nav-primary">
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Work</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Project Planner</li>
          </ul>
        </nav>
      </Col>
    )
  }
}

export default Navigation;
