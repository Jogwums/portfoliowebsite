import React from 'react'
import Card from '../components/Card'
import Navigation from '../components/navbar'
import HeaderDetails from '../components/Header/'
// styling
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// assets
import Data1 from "../assets/img/08.jpg"
import Data2 from "../assets/img/13.jpg"



const DataPortfolio = ({type, text}) => {
    return (
        <>
            <Navigation />
            <HeaderDetails type={"Data Analysis Projects"} text={text} />
            <Container>
                <Row>
                    <Col>
                      <div className="card-deck mt-5">
                        <Card image={Data2} text={"Tableau"} 
                                link={"https://public.tableau.com/app/profile/jonathan.ogwumike"} />
                        <Card image={Data1} 
                                text={"Kaggle"} 
                                link={"https://www.kaggle.com/jogwums"}/>
                        <Card image={Data2} 
                                text={"PowerBI"} 
                                link={"https://www.kaggle.com/jogwums"}/>
                      </div>
                    </Col>
                </Row>
                </Container>
        </>
    )
}

export default DataPortfolio
