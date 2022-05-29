import React from 'react'
// components
import Navigation from '../components/navbar'
import Cards from '../components/Cards'
import FooterDetails from '../components/Footer'
// import HeaderDetails from '../components/Header/'
// import HeroDetails from '../components/Hero Details'
import Hero from '../components/Hero'
//stylling
// import Container from 'react-bootstrap/Container'

const Home = () => {
    return (
        <div>
            <Navigation />
            <Hero>
                {/* <div className="herogrp">
                    <div className='heromsg'>
                        <HeroDetails />
                        <HeroDetails />
                    </div>
                </div> */}

            </Hero>
            <Cards></Cards>
            <FooterDetails />
        </div>
    )
}

export default Home
