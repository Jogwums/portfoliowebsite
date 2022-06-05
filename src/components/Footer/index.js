import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

// component
// import Example from '../ButtonCollapse'

import {FaLinkedin, FaGithub, FaKaggle } from 'react-icons/fa'

const FooterDetails = () => {
    return (
    <>
      <Navbar className="py-5 bg-black flex">
        {/* <Example /> */}
              <div className=''>
                {/* <!-- social icon --> */}
              <div className="socials float-left">
              <ul className="list-unstyled mt-3 position-relative zindex-1">
                {/* <li className='mb-3'><a className='text-white' href="/"><FaTwitter size={`2em`} /></a></li> */}
                {/* <li className='mb-3'><a className='text-white' href="/"><FaFacebookF size={`2em`} /></a></li> */}
                <li className='mb-3'><a className='text-white' href="https://github.com/Jogwums"><FaGithub size={`2em`} /></a></li>
                <li className='mb-3'><a className='text-white' href="https://www.kaggle.com/jogwums"><FaKaggle size={`2em`} /></a></li>
                <li className='mb-3'><a className='text-white' href="https://www.linkedin.com/in/jonathan-ogwumike012016/">
                  <FaLinkedin size={`2em`} /></a></li>
                
              </ul>
              </div>
            {/* <!-- /social icon --> */}
              </div>
            <div className="container px-5 bg-black ml-auto float-right">
              <p className="m-0 text-center small">&copy; Jonathan Ogwumike 2021</p>
            </div>
        </Navbar>
    </>
  )
}

export default FooterDetails;
