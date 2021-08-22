import React from 'react'
import Card from '../components/Card'
import Navigation from '../components/navbar'
// styling
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// assets
import Data1 from "../assets/img/08.jpg"
import Data2 from "../assets/img/13.jpg"



const DataPortfolio = () => {
    return (
        <>
            <Navigation />
            <Container>
                <Row>
                    <Col>
                      <Card image={Data2} text={"Tableau"} 
                          link={"https://public.tableau.com/app/profile/jonathan.ogwumike"} />
                    </Col>
                    <Col md={12}>
                     <Card image={Data1} 
                            text={"Kaggle"} 
                            link={"https://www.kaggle.com/jogwums"} />
                    </Col>
                </Row>
                </Container>
        </>
    )
}

export default DataPortfolio
