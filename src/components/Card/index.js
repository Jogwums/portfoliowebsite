import React from 'react';

// styling
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Card = ({image, text, link}) => {
    return (
    <>
    <section id="scroll">
            <Container className="container px-5">
                <Row className="row gx-5 align-items-center">
                    <Col className="col-lg-6 order-lg-2">
                        <a href={link} target="_blank" rel="noreferrer">
                        <div className="p-5">
                            <img className="img-fluid rounded-circle" src={image} alt="..." /></div>
                        </a>
                    </Col>
                    <Col className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="hero">For those who love {text}</h2>
                            <p>Click the image to view more, you'll be redirected to the project website.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Card;
