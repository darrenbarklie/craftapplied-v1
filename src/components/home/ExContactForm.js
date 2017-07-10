import React, { Component } from 'react';
import { Form, Text, Textarea, FormError } from 'react-form'


class ExContactForm extends Component {
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
          return (
            <div>Validation Failed</div>
          )
        }}
      >

        {({ submitForm }) => {
          return (
            <form onSubmit={submitForm}>
              <Text field='name' />
              <Text field='email' />
              <Text field='company' />
              <Text field='subject' />
              <Textarea
                field='message'
                placeholder='Message here'
              />

              <button type='submit'>Submit</button>
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
export default ExContactForm;
