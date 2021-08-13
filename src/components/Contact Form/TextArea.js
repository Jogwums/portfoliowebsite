import React from 'react'
import { ErrorMessage, useField } from 'formik'

const TextArea = ({ label, ...props}) => {
    const [field, meta] = useField(props);
  
    return (
        <>
        <div>
            <label htmlFor={field.name}>{label}</label>
            <textarea  
                className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete="off" rows={5}
                />
                <ErrorMessage component="div" className="error" name={field.name} />
        </div>
        </>
    )
}

export default TextArea
