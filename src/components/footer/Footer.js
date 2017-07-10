import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import Navigation from '../header/Navigation';


class Footer extends Component {
  render() {
    return (
      <footer className="main">
        <Row>
          <Col lg={6} md={6} sm={6} xs={12} className="social">
            <ul>
              <li><a href="#">facebook</a></li>
              <li><a href="#">linkedin</a></li>
              <li><a href="#">instagram</a></li>
              <li><a href="#">codepen</a></li>
            </ul>
          </Col>

          <Col lg={6} md={6} sm={6} xs={12} className="navigation">
            <Navigation />
          </Col>
        </Row>
      </footer>
    )
  }
}

export default Footer;
