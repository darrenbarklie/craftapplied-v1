import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class Splash extends Component {
  render() {
    return (
      <section id="splash">

        <Row>
          <Col lg={7} md={8} sm={8} xs={12}>

            <h1>We are a digital creative agency dedicated to crafting valuable UI &amp; UX solutions.</h1>

          </Col>
        </Row>

      </section>
    )
  }
}

export default Splash;
