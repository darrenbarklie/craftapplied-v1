import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import GraphicPlanning from '../../assets/svg/graphic-splash-planning.svg';
import GraphicDesign from '../../assets/svg/graphic-splash-design.svg';
import GraphicDevelopment from '../../assets/svg/graphic-splash-development.svg';


class Splash extends Component {
  render() {
    return (
      <section id="splash">

        <Grid fluid className="grid-container">
          <Row>

            <Col lg={7} md={8} sm={8} xs={12} className="lead-text">
              <h1>We are a digital creative agency dedicated to crafting valuable UI &amp; UX solutions.</h1>
            </Col>

            <Col lg={5} md={4} sm={4} xs={12} className="splash-graphic">
              <div className="container">
                <img src={GraphicPlanning} className="splash-graphic-01 splash-graphic" alt="Graphic Planning" />
                {/* <img src={GraphicDesign} alt="Graphic Design" />
                <img src={GraphicDevelopment} alt="Graphic Development" /> */}
              </div>
            </Col>


          </Row>
        </Grid>

      </section>
    )
  }
}

export default Splash;
