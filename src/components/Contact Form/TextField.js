import React from 'react'
import { ErrorMessage, useField } from 'formik'

const TextField = ({ label, ...props}) => {
    const [field, meta] = useField(props);
  
    return (
        <>
            <label htmlFor={field.name}>{label}</label>
            <input 
                className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete="off"
                />
                <ErrorMessage component="div" className="error" name={field.name} />
        </>
    )
}

export default TextField
