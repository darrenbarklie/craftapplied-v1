import React, { Component } from 'react';
import { Form, Text, Textarea, FormError } from 'react-form'
import { Row, Col } from 'react-flexbox-grid';

class ContactForm extends Component {
  render() {

    const contactForm = (
      <Form
        onSubmit={(values) => {
          console.log('Success!', values)
        }}
        validate={values => {
          const { name, email, message } = values
          return {
            name: !name ? 'A name is required' : undefined,
            email: !email ? 'An email is required' : undefined,
            message: !message ? 'A message is required' : undefined,
          }
        }}
        onValidationFail={() => {
          // window.alert('You are missing some required fields, please check before resubmitting.')
        }}
      >

        {({ submitForm }) => {
          return (
            <form onSubmit={submitForm}>
              <Row>

                <Col lg={4} md={6} sm={12} xs={12} className="contact-name form-item">
                  <label>Name <span>(Required)</span>
                    <Text field='name' />
                  </label>
                </Col>

                <Col lg={4} md={6} sm={12} xs={12} className="contact-email form-item">
                  <label>Email <span>(Required)</span>
                    <Text field='email' />
                  </label>
                </Col>

                <Col lg={4} md={6} sm={12} xs={12} className="contact-company form-item">
                  <label>Company
                    <Text field='company' />
                  </label>
                </Col>

                <Col lg={12} md={6} sm={12} xs={12} className="contact-subject form-item">
                  <label>Subject
                    <Text field='subject' />
                  </label>
                </Col>

                <Col lg={12} md={12} sm={12} xs={12} className="contact-message form-item">
                  <label>Message <span>(Required)</span>
                    <Textarea
                      id="message"
                      field='message'
                      className="textarea"
                    />
                  </label>
                </Col>

                <Row className="row">

                  <Col lg={6} md={6} sm={6} xs={12} className="contact-submit">
                    <button type='submit'>Send Message</button>
                  </Col>

                  <Col lg={6} md={6} sm={6} xs={12} className="contact-alt">
                    <p>Alternatively you can email us at:</p>
                    <a href="mailto:hello@craftapplied.com">hello@craftapplied.com</a>
                  </Col>

                </Row>

              </Row>
            </form>
          )
        }}

      </Form>
    )

    return (
      <div className="contact-form">
        {contactForm}
      </div>
    )

  }

}
export default ContactForm;
