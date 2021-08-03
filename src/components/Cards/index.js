import React from 'react'

import Card from '../Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// assets
import Img from "../../assets/img/01.jpg"
import Img2 from "../../assets/img/02.jpg"
import Img3 from "../../assets/img/joker2.jpg"
import Img4 from "../../assets/img/joker2.jpg"

const Cards = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={12}>
                     <Card image={Img} 
                            text={"Ecommerce"} 
                            link={"https://joe-e-commerce-project-1462e2.netlify.app/"} />
                    </Col>
                    <Col>
                      <Card image={Img2} text={"Data"} link={"#data"} />
                    </Col>
                </Row>
             </Container>
             <Card image={Img3} 
                   text={"Jokes"} 
                   link={"https://react-jokes-app-86180c.netlify.app"} />

             <Card image={Img4} 
                   text={"Crypto"} 
                   link={"https://crypto-tracker-app-f80ecc.netlify.app/"} /> 
                   
            <Card image={Img3} 
                   text={"Saving"} 
                   link={"https://budget-calculator-ce321d.netlify.app/"} />
                   
            <Card image={Img3} 
                   text={"Food"} 
                   link={"https://react-recipe-app-9a0239.netlify.app/"} />
        </>
    )
}

export default Cards
