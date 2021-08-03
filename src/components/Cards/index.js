import React from 'react'

import Card from '../Card'

// assets
import Img from "../../assets/img/01.jpg"
import Img2 from "../../assets/img/02.jpg"
import Img3 from "../../assets/img/joker2.jpg"

const Cards = () => {
    return (
        <>
             <Card image={Img} 
                   text={"Ecommerce"} 
                   link={"https://joe-e-commerce-project-1462e2.netlify.app/"} />

             <Card image={Img2} text={"Data"} link={"#data"} />

             <Card image={Img3} 
                   text={"Jokes"} 
                   link={"https://app.netlify.com/sites/react-jokes-app-86180c"} />
             <Card image={Img} text={"Fun"} />
        </>
    )
}

export default Cards
