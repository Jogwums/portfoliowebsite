import React from "react";
import { useState } from 'react';
//components
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//formik
import { Formik } from 'formik'
import * as yup from 'yup';

//emailjs
import { send, init } from 'emailjs-com';
init("user_7qrhMO4byVwMRWpIvHg4x");





const schema = yup.object().shape({
  Name: yup.string().required(),
  email: yup.string().required(),
  username: yup.string().required(),
  subject: yup.string().required(),
  terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
});

function FormExample() {

  const [toSend, setToSend] = useState({
    from_name: 'Visitor',
    to_name: 'Jonathan',
    message: 'Hello World',
    subject:'',
    reply_to: 'Jamie',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
        'service_y6b2zbb',
        'template_vhowkmn',
        toSend,
        'user_7qrhMO4byVwMRWpIvHg4x'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={{...toSend}}
    >
      {({
        handleSubmits,
        handleChanges,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={onSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationFormik101">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="Name"
                onChange={handleChange}
                value={setToSend.from_name}
                isValid={touched.Name && !errors.Name}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group 
              
              as={Col} md="6" controlId="validationFormik102">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="text"
                name="email"
                onChange={handleChange}
                value={setToSend.to_name}
                isValid={touched.email && !errors.email}
              />

              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            
          </Form.Row>
          <Form.Row>
            <Form.Group 
                onChange={handleChange} 
                as={Col} 
                md="12" 
                controlId="validationFormik103">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Subject"
                name="subject"
                isInvalid={!!errors.subject}
                value={setToSend.subject}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.subject}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group 
            controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control  
              onChange={handleChange}
              value={setToSend.message} 
              as="textarea" rows={5} />
         </Form.Group>
          <Button
            onClick={onSubmit} 
            type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormExample;