import React from "react";
import { useState } from 'react';
//components
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//formik
import { Formik, Field, ErrorMessage } from 'formik'
import * as yup from 'yup';

//emailjs
import { send, init } from 'emailjs-com';
init(process.env.REACT_APP_FORMIK_USER_ID);


const initialValues = {
  name: '',
  email:'',
  subject:'',
  message:''
}

const onSubmit = async values => {
  console.log('====================================');
  console.log('Form data', await values);
  console.log('====================================');
  console.log('Form data');
}
const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required'),
  subject: yup.string().required(),
  message: yup.string().required()
});

function FormExample() {

  // const onSubmitEmailJs = async (e) => {
  //   e.preventDefault();
  //   send(
  //     process.env.REACT_APP_FORMIK_SERVICE_ID,
  //     process.env.REACT_APP_FORMIK_TEMPLATE_ID,
  //       await toSend,
  //       process.env.REACT_APP_FORMIK_USER_ID
  //     )
  //       .then((response) => {
  //         console.log('SUCCESS!', response.status, response.text);
  //       })
  //       .catch((err) => {
  //         console.log('FAILED...', err);
  //       })
  // };

  // const handleChangeEmailJs = (e) => {
  //   setToSend({ ...toSend, [e.target.name]: e.target.value });
  // };


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form onSubmit={onSubmit}>
          <Form.Row>
            <Form.Group
              
              as={Col} md="6" controlId="validationFormik101">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                isValid={touched.name && !errors.name}
                
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group 
  
              as={Col} md="6" controlId="validationFormik102">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
              />

              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            
          </Form.Row>
          <Form.Row>
            <Form.Group 
                
                as={Col} 
                md="12" 
                controlId="validationFormik103">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Subject"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                isInvalid={!!errors.subject}
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
              value={values.message}
              onChange={handleChange}
              as="textarea" rows={5} name="message" type="textarea" />
         </Form.Group>
          <Button
            type="submit">Submit form</Button>
        </Form>
      )}
      </Formik>
  )
  };

export default FormExample;