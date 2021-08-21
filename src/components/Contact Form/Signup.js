import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import TextField from './TextField'
import TextArea from './TextArea'

const Signup = () => {

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
    const validate = Yup.object({
        name: Yup.string().required("Name is Required"),
        email: Yup.string()
                    .email("Email is invalid")
                    .required("Email is Required"),
        subject: Yup.string()
                .required("Subject is Required"),
        message: Yup.string()
                .required("Please leave a Message"),
    })

    const handleClick = () => {
        console.log("Clicked");
        console.log();
    }

    return (
        <Formik
        initialValues={{
            name:'',
            email:'',
            subject:'',
            meassage:''
        }}
        validationSchema={validate}
        onSubmit={ async (values) => {
            await sleep(500);
            window.alert(JSON.stringify(values, null, 2));
        }}
        >
            {({isSubmitting}) => (
                    <Form className="form">
                        <div className="form-row">
                        <div className="col-md-6">
                          <TextField name="name" type="text" placeholder="Name" />
                        </div>
                        <div className="col-md-6">
                          <TextField name="email" type="email" placeholder="Email" />
                        </div>
                        
                        </div>
                        <TextField name="subject" type="text" placeholder="Subject" />
                        <TextArea name="message" type="text" placeholder="Message" />
                        <button 
                            className="btn btn-dark mt-3" 
                            type="submit"
                            onClick={handleClick}
                            >
                            Send <span><i className="far fa-paper-plane"></i></span>
                        </button>
                        <button className="btn btn-danger mt-3 ml-3" type="reset">
                            Reset <span><i className="fas fa-recycle"></i></span>
                        </button>
                    </Form>
            )}
        </Formik>
    )  
}


export default Signup
