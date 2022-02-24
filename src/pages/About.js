import React from 'react'

import Navbar from '../components/navbar/index';
import dots_cyan from  '../assets/images/illustrations/dots-cyan.png';
import author from  '../assets/images/about/author.jpg';
import signature from  '../assets/images/about/signature.png';

// icons
import {FaLinkedin, FaFacebookF, FaTwitter, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'

const About = () => {
  return (
    <>
    <Navbar />
    <section className="jumbotron hero-area " id="parallax">
  <div className="container">
    <div className="row">
      <div className="col-lg-11 mx-auto">
        <h1 className="text-white font-tertiary">Hi! I’m <br /> Jonathan <br /> Solutions Expert</h1>
      </div>
    </div>
  </div>
  <div className="layer-bg w-100">
    <img className="img-fluid w-100" src="images/illustrations/leaf-bg.png" alt="bg-shape" />
  </div>
  <div className="layer" id="l2">
    <img src={dots_cyan} alt="bg-shape" />
  </div>
  <div className="layer" id="l3">
    <img src="images/illustrations/leaf-orange.png" alt="bg-shape" />
  </div>
  <div className="layer" id="l4">
    <img src="images/illustrations/dots-orange.png" alt="bg-shape" />
  </div>
  <div className="layer" id="l5">
    <img src="images/illustrations/leaf-yellow.png" alt="bg-shape" />
  </div>
  <div className="layer" id="l6">
    <img src="images/illustrations/leaf-cyan.png" alt="bg-shape" />
  </div>
  <div className="layer" id="l7">
    <img src="images/illustrations/dots-group-orange.png" alt="bg-shape" />
  </div>
  <div className="layer" id="l8">
    <img src="images/illustrations/leaf-pink-round.png" alt="bg-shape" />
  </div>
  <div className="layer" id="l9">
    <img src="images/illustrations/leaf-cyan-2.png" alt="bg-shape" />
  </div>
  {/* <!-- social icon --> */}
  <ul className="list-unstyled ml-5 mt-3 position-relative zindex-1">
    <li className='mb-3'><a className='text-white' href="/"><FaTwitter /></a></li>
    <li className='mb-3'><a className='text-white' href="/"><FaInstagram /></a></li>
    <li className='mb-3'><a className='text-white' href="/"><FaFacebook /></a></li>
    <li className='mb-3'><a className='text-white' href="/"><FaFacebookF /></a></li>
    <li className='mb-3'><a className='text-white' href="/"><FaGithub /></a></li>
    <li className='mb-3'><a className='text-white' href="/"><FaLinkedin /></a></li>
    
  </ul>
  {/* <!-- /social icon --> */}
</section>
<section className="section pt-5">
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident.</p>
        <p>Deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.</p>
      </div>
      <div className="col-md-4 text-center drag-lg-top">
        <div className="shadow-down mb-4">
          <img src={author} alt="author" className="img-fluid w-100 rounded-lg border-thick border-white" />
        </div>
        <img src={signature} alt="signature" className="img-fluid" />
        <h4>Jonathan Ogwumike</h4>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default About