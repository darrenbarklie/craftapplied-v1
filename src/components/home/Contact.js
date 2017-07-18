import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import ContactForm from './contact/ContactForm';


class Contact extends Component {
  render() {
    return (
      <section id="contact">

        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>

            <p className="shoutout">Interested in our services?</p>
            <p className="shoutout">Say hello below:</p>

            <ContactForm />

          </Col>
        </Row>

      </section>
    )
  }
}

export default Contact;
