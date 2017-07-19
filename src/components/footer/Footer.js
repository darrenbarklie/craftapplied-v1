import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Navigation from '../header/Navigation';


class Footer extends Component {
  render() {
    return (
      <footer className="main">
        <Grid fluid className="grid-container" >

          <Row>
            <Col lg={6} md={6} sm={12} xs={12} className="social">
              <ul>
                <li><a href="https://www.facebook.com/craftapplied" target="_blank">facebook</a></li>
                <li><a href="https://twitter.com/craftapplied" target="_blank">twitter</a></li>
                <li><a href="javascript:void(0)" target="_blank" className="coming-soon">linkedin</a></li>
                <li><a href="javascript:void(0)" target="_blank" className="coming-soon">instagram</a></li>
                <li><a href="javascript:void(0)" target="_blank" className="coming-soon">codepen</a></li>
              </ul>
            </Col>

            <Col lg={6} md={6} sm={12} xs={12} className="navigation">
              <Navigation />
            </Col>
          </Row>

          <Row>
            <Col lg={12} md={12} sm={12} xs={12} className="copyright">
              <p>&copy;2017 Craft Applied. All rights reserved.</p>
            </Col>
          </Row>

        </Grid>
      </footer>
    )
  }
}

export default Footer;
