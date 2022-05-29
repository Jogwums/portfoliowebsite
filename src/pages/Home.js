import React from 'react'
// components
import Navigation from '../components/navbar'
import Cards from '../components/Cards'
import FooterDetails from '../components/Footer'
// import HeaderDetails from '../components/Header/'
import HeroDetails from '../components/Hero Details'
import Hero from '../components/Hero'
//stylling
// import Container from 'react-bootstrap/Container'

const Home = ({nav, text}) => {
    return (
        <>
            <Navigation />
            <Hero>
                <div className="">
                        <HeroDetails />
                </div>

            </Hero>
            <Cards></Cards>
            <FooterDetails />
        </>
    )
}

export default Home
