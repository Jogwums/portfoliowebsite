import React from 'react'

import Navigation from '../components/navbar'
import Footer from '../components/Footer'

//pages
// import DataPortfolio from './DataPortfolio'
// styling
import Card from '../components/CardNoImage'

// images


// components
import { Button } from 'react-bootstrap'

const Portfolio = () => {
  return (
    <>
        <Navigation />
            <div className='portfolio-home'>
                <section className="portfolio-card-da ">
                      <div className='portfolio-card-text-da'>
                        <h2>Data Portfolio</h2>
                        <Card 
                        link={"/data"}
                        text={"Click to view"} />
                        <Button href='/data'>View</Button>
                   </div>
                </section>
                {/* design section */}
                <section className="portfolio-card-ds">
                      <div className='portfolio-card-text-ds'>
                        <h2>Design Portfolio</h2>
                          <Card 
                          link={"/design"}
                          text={"Click to view"} />
                          <Button href='/design'>View</Button>
                      </div>
                </section>
            </div>
        <Footer />
    </>

  )
}

export default Portfolio