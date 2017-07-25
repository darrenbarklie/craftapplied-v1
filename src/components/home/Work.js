import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import WorkObject01 from './work/WorkObject01';
import WorkObject02 from './work/WorkObject02';
import WorkObject03 from './work/WorkObject03';
import WorkObject04 from './work/WorkObject04';
import WorkObject05 from './work/WorkObject05';
import WorkObject06 from './work/WorkObject06';


class Work extends Component {
  render() {
    return (
      <section id="work">

        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <p>Our work:</p>
          </Col>

          <Col lg={6} md={6} sm={6} xs={12} className="col">
            <WorkObject01 name="Europcar Station App" type="UI/UX Design" />
          </Col>

          <Col lg={6} md={6} sm={6} xs={12} className="col">
            <WorkObject02 name="EnergeiaWorks Website" type="Web Design &amp; Development" />

            <WorkObject03 name="Global PR Network Website" type="Web Design &amp; Development" />
          </Col>

          <Col lg={12} md={12} sm={12} xs={12} className="col">
            <WorkObject04 name="James LeBosquet Hairstyling Web App" type="Web Design &amp; Development" />
          </Col>

          {/*<Col lg={6} md={6} sm={6} xs={12} className="col">
            <WorkObject05 name="NIFTIT Creative Homepage" type="Branding &amp; Illustration" />
          </Col>

          <Col lg={6} md={6} sm={6} xs={12} className="col">
            <WorkObject06 name="NIFTIT NYC Brochure" type="Illustration &amp; Print Design" />
          </Col> */}

        </Row>

      </section>
    )
  }
}

export default Work;
