import React from 'react'
// components
import Navigation from '../components/navbar'
import Cards from '../components/Cards'
import FooterDetails from '../components/Footer'
import HeaderDetails from '../components/Header/'
//stylling
import Container from 'react-bootstrap/Container'

const Home = () => {
    return (
        <div>
            <Navigation />
            <HeaderDetails text="Front-End Systems Developer" type={"Projects"} />
            <Container>
                <Cards />
            </Container>
            <FooterDetails />
        </div>
    )
}

export default Home
