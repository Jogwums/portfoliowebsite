import React from 'react'

import Card from '../Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// assets
import EcomImg from "../../assets/img/03.jpg"
import DataImg from "../../assets/img/08.jpg"
import JokesImg from "../../assets/img/09.jpg"
import CryptoImg from "../../assets/img/06.jpg"
import SavingsImg from "../../assets/img/05.jpg"
import FoodImg from "../../assets/img/04.jpg"

const Cards = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={12}>
                     <Card image={EcomImg} 
                            text={"Ecommerce"} 
                            link={"https://joe-e-commerce-project-1462e2.netlify.app/"} />
                    </Col>
                    <Col>
                      <Card image={DataImg} text={"Data"} 
                          link={"https://www.kaggle.com/jogwums"} />
                    </Col>
                </Row>
                <Row >
                 <Col md={12}>
                 <Card image={JokesImg} 
                   text={"Jokes"} 
                   link={"https://react-jokes-app-86180c.netlify.app"} />
                 </Col>
                 <Col>
                 <Card image={FoodImg} 
                   text={"Food"} 
                   link={"https://react-recipe-app-9a0239.netlify.app/"} />
                 </Col>
             </Row>
             <Row>
                 <Col md={12}>
                 <Card image={CryptoImg} 
                   text={"Crypto"} 
                   link={"https://crypto-tracker-app-f80ecc.netlify.app/"} /> 
                 </Col>
                 <Col>          
                  <Card image={SavingsImg} 
                   text={"Saving"} 
                   link={"https://budget-calculator-ce321d.netlify.app/"} /> 
                 </Col>
             </Row>
          </Container>
        </>
    )
}

export default Cards
