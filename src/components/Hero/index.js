import React from 'react'
import { Container } from 'react-bootstrap'


//images
import bg_main from '../../assets/img/hero/jt2_no_bg.png'
// import bg_main2 from '../../assets/img/hero/jt2.jpg'

const Hero = (props) => {
  return (
    <>
        <div className='hero' style={{backgroundImage:`url(${bg_main})`,
         backgroundRepeat:'no-repeat', backgroundSize:'cover'
        ,height:`100vh`, width:`95%`, backgroundAttachment:`fixed`}}>
            <Container>
            {props.children}
            </Container>
        </div>
        
    </>
  )
}

export default Hero