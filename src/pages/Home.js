import React from 'react'
// components
import Navigation from '../components/navbar'
import Cards from '../components/Cards'
import FooterDetails from '../components/Footer'
import HeaderDetails from '../components/Header/'

const Home = () => {
    return (
        <div>
            <Navigation />
            <HeaderDetails />
            <Cards />
            <FooterDetails />
        </div>
    )
}

export default Home
