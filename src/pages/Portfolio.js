import React from 'react'

import Navigation from '../components/navbar'
import Footer from '../components/Footer'

const Portfolio = () => {
  return (
    <>
        <Navigation />
            <div className='portfolio-home'>
                <div>Data Portfolio</div>
                <div>Design Portfolio</div>
            </div>
        <Footer />
    </>

  )
}

export default Portfolio