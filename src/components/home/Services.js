import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class Services extends Component {
  render() {
    return (
      <section id="services">

        <Row>
          <Col lg={6} md={8} sm={8} xs={12}>
            <p>We answer client needs for digital creative services, sharing our expertise and experience in:</p>
          </Col>

          <Col lg={6} md={4} sm={8} xs={12}>
          </Col>

          <Col lg={6} md={6} sm={6} xs={12}>
            <span>User Experience</span>
            <span>User Interface</span>
            <span>Web Design</span>
            <span>Application Design</span>
          </Col>

          <Col lg={6} md={6} sm={6} xs={12}>
            <span>Front-end Development</span>
            <span>Editorial Design</span>
            <span>Branding Identity</span>
            <span>Illustration</span>
          </Col>
        </Row>

      </section>
    )
  }
}

export default Services;
