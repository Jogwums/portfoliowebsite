import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as emailjs from 'emailjs-com';

const ContactForm = () => {

    const [buttonState, setButtonState] = useState('Send Message');
  const formik = useFormik({
	//we have created our initailValues object in a format EmailJS accepts
	initialValues: {
	  from_name: '', //user name
	  to_name: process.env.REACT_APP_ADMIN_EMAIL, //email id of the admin
	  subject: '', // subject of email
	  reply_to: '', // user email
	  message: '' // message of email
        },
	validationSchema: Yup.object({
	   from_name: Yup.string()
		.required('* Name field is required'),
	   subject: Yup.string()
		.required('* Subject field is required'),
	   reply_to: Yup.string().email('Invalid email address')
		.required('* Email field is required'),
	   message: Yup.string().required('* Message field is required')
	}),
	onSubmit: (values) => {
	   try{
		emailjs.send(process.env.REACT_APP_FORMIK_SERVICE_ID , 
            process.env.REACT_APP_FORMIK_TEMPLATE_ID, 
            values, 
            process.env.REACT_APP_FORMIK_USER_ID)
		  .then(() => {
		     sentMessage.classList.add('success');
		     sentMessage.innerHTML = CONTACT_ERROR.success;
		     setButtonState('Send Email');
		     setSubmitting(false);
		     resetForm();
	          });
	   }
	   catch {
	      sentMessage.classList.add('error');
	      sentMessage.innerHTML = CONTACT_ERROR.error;
	      setButtonState('Send Email');
	      setSubmitting(false);
	  }
     },
  });

    return (
        <>
             <Form noValidate onSubmit={formik.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationFormik101">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="Name"
                onChange={formik.handleChange}
         	   value={formik.values.from_name}
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
                onChange={formik.handleChange}
         	   value={formik.values.reply_to}
                isValid={touched.email && !errors.email}
              />

              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationFormik103">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Subject"
                name="subject"
                onChange={formik.handleChange}
         	   value={formik.values.subject}
                isInvalid={!!errors.subject}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.subject}
              </Form.Control.Feedback>
            </Form.Group>
            
            
          </Form.Row>
          <Form.Group 
            onChange={formik.handleChange}
		    value={formik.values.message}
            controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} />
         </Form.Group>
          {/* <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              id="validationFormik106"
              feedbackTooltip
            />
          </Form.Group> */}
          <Button disabled={formik.isSubmitting} type="submit" className="btn main-btn">
          <span>{buttonState}</span>
          </Button>
        </Form>
        </>
    )
}

export default ContactForm
