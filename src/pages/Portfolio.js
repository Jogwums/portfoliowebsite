import React from 'react'

import Navigation from '../components/navbar'
import Footer from '../components/Footer'

// styling
import Card from '../components/CardNoImage'

// components
import { Button, Container, Row, Col } from 'react-bootstrap'

const Portfolio = () => {
  return (
    <>
        <Navigation />
            <Container fluid className='m-0 p-0'>
            <Row className='p-0'>
              <Col sm={12} lg={6} className='m-0 p-0'>
                <div className="portfolio-card-da ">
                      <div className='portfolio-card-text-da'>
                        <h2>Data Portfolio</h2>
                        <Card 
                        link={"/data"}
                        text={"Click to view"} />
                        <Button href='/data'>View</Button>
                   </div>
                </div>
              </Col>
                {/* design section */}
              <Col sm={12} lg={6} className='m-0 p-0'>
                <div className="portfolio-card-ds">
                      <div className='portfolio-card-text-ds'>
                        <h2>Design Portfolio</h2>
                          <Card 
                          link={"/design"}
                          text={"Click to view"} />
                          <Button href='/design'>View</Button>
                      </div>
                </div>
              </Col>
           </Row>
            </Container>
        <Footer/>
    </>

  )
}

export default Portfolio