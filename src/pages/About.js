import React from 'react'


import author from  '../assets/img/hero/jt_no_bg_grey.png';
import signature from  '../assets/images/about/signature.png';

// icons
import {FaLinkedin, FaFacebookF, FaTwitter, FaGithub, FaKaggle } from 'react-icons/fa'

const About = () => {
  return (
    <>
    <section className="jumbotron my-0 py-0" id="parallax">
  <div className="container">
    <div className="row">
      <div className="col-lg-11 mx-auto">
        <h1 className="text-white font-tertiary">
        <br /> Solutions Expert | Quick Links
        {/* <br/> Proper Prior Planning Prevents Poor Performance<br/> */}
        </h1>
      </div>
    </div>
  </div>
  
  {/* <!-- social icon --> */}
  <div className="socials">
  <ul className="list-unstyled ml-5 mt-3 position-relative zindex-1">
    <li className='mb-3'><a className='text-white' href="/"><FaTwitter size={`2em`} /></a></li>
    <li className='mb-3'><a className='text-white' href="/"><FaFacebookF size={`2em`} /></a></li>
    <li className='mb-3'><a className='text-white' href="/"><FaGithub size={`2em`} /></a></li>
    <li className='mb-3'><a className='text-white' href="/"><FaKaggle size={`2em`} /></a></li>
    <li className='mb-3'><a className='text-white' href="/"><FaLinkedin size={`2em`} /></a></li>
    
  </ul>
  </div>
  {/* <!-- /social icon --> */}
</section>
<section className="section pt-5">
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <p>Data and business intelligence analyst. Interested in ml, web development and cloud 
          computing commodo consequat.</p>
        <p>Experienced trainer and developer, working with SQL, Microsoft Excel, Power BI, Python, JavaScript, ReactJS, 
          SPSS, SigmaPlot, Grapher12, Streamlit, CSS, HTML, Bootstrap, Tailwind and other technologies 
          for data analysis, web development and machine learning.</p>
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