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
            <Navigation />
            <HeaderDetails type={"Design Projects"} text={text} />
            <Container>
                <Row>
                    <Col>
                      <div className="card-deck mt-5">
                        <Card image={Data2} text={"Eccomerce"} 
                                link={"https://joe-e-commerce-project-1462e2.netlify.app/"} />
                        <Card image={Data1} 
                                text={"Crypto"} 
                                link={"https://crypto-tracker-app-f80ecc.netlify.app/"}/>
                        <Card image={Data2} 
                                text={"Budget"} 
                                link={"https://budget-calculator-ce321d.netlify.app/"}/>
                      </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                      <div className="card-deck mt-5">
                        <Card image={Data2} text={"Jokes"} 
                                link={"https://react-jokes-app-86180c.netlify.app/"} />
                        <Card image={Data1} 
                                text={"Recipes"} 
                                link={"https://react-recipe-app-9a0239.netlify.app/"}/>
                        <Card image={Data2} 
                                text={"APIs"} 
                                link={"/"}/>
                      </div>
                    </Col>
                </Row>
                </Container>
    </>
  )
}

export default DesignPortfolio