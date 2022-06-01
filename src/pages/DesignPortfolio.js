import React from 'react'

// components
import Card from '../components/Card'
import HeaderDetails from '../components/Header'

// styling
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// assets
import Data1 from "../assets/img/08.jpg"
import Data2 from "../assets/img/13.jpg"
import Navigation from '../components/navbar'

const DesignPortfolio = ({text, }) => {
  return (
    <>
            <Container>
            <Navigation />
            <HeaderDetails type={"Data Projects"} text={text} />
                <Row>
                    <Col>
                      <div className="card-deck mt-5">
                        <Card image={Data2} text={"Eccomerce"} 
                                link={"https://public.tableau.com/app/profile/jonathan.ogwumike"} />
                        <Card image={Data1} 
                                text={"Crypto"} 
                                link={"https://www.kaggle.com/jogwums"}/>
                        <Card image={Data2} 
                                text={"Budget"} 
                                link={"/pbi"}/>
                      </div>
                    </Col>
                </Row>
                </Container>
    </>
  )
}

export default DesignPortfolio