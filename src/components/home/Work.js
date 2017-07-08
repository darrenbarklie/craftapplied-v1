import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';



class Work extends Component {
  render() {
    return (
      <div id="work">

        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <p>Our work:</p>
          </Col>

          <Col lg={6} md={6} sm={6} xs={12} className="work-01 work-item">
            
            Hey
          </Col>

          <Col lg={6} md={6} sm={6} xs={12} className="">
            <div className="work-02 work-item">
              EnergeiaWorks
            </div>
            <div className="work-03 work-item">
              RMZ
            </div>
          </Col>

        </Row>

      </div>
    )
  }
}

export default Work;
