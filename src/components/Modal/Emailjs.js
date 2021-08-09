import React from 'react'
import { useState } from 'react';
import { send } from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_7qrhMO4byVwMRWpIvHg4x");

const Emailjs = () => {

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
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
           <form onSubmit={onSubmit}>
            <input
                type='text'
                name='from_name'
                placeholder='from name'
                value={toSend.from_name}
                onChange={handleChange}
            />
            <input
                type='text'
                name='to_name'
                placeholder='to name'
                value={toSend.to_name}
                onChange={handleChange}
            />
            <input
                type='text'
                name='message'
                placeholder='Your message'
                value={toSend.message}
                onChange={handleChange}
            />
            <input
                type='text'
                name='reply_to'
                placeholder='Your email'
                value={toSend.reply_to}
                onChange={handleChange}
            />
            <input type="submit" value="Submit" />
    </form> 
    
    )
}

export default Emailjs;
