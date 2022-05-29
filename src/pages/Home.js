import React from 'react'
// components
import Navigation from '../components/navbar'
// import Cards from '../components/Cards'
import FooterDetails from '../components/Footer'
// import HeaderDetails from '../components/Header/'
import HeroDetails from '../components/Hero Details'
import Hero from '../components/Hero'
import About from './About'
// import Card from '../components/Card'
//stylling
// import Container from 'react-bootstrap/Container'

const Home = ({navi, text}) => {
    return (
        <>
            <Navigation />
            <Hero>
                <div className="heromsg">
                <HeroDetails />
                </div>
            </Hero>
            <About />
            <FooterDetails />
        </>
    )
}

export default Home
