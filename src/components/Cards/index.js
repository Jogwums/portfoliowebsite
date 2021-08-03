import React from 'react'

import Card from '../Card'

// assets
import Img from "../../assets/img/01.jpg"
import Img2 from "../../assets/img/02.jpg"
import Img3 from "../../assets/img/03.jpg"

const Cards = () => {
    return (
        <>
             <Card image={Img} />
             <Card image={Img2} />
             <Card image={Img3} />
        </>
    )
}

export default Cards
