import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Brand from './Brand';
import Navigation from './Navigation';


class Header extends Component {
  render() {
    return (
      <header className="main">
        <Grid fluid className="grid-container">
          <Row>

            <Col className="brand">
              <Brand />
            </Col>

            <Col className="nav-primary">
              <Navigation />
            </Col>

          </Row>
        </Grid>
      </header>
    )
  }
}

export default Header;
