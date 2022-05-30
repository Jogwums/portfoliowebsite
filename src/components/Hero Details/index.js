import React from 'react'

// components
import { Button } from 'react-bootstrap'

const HeroDetails = () => {
  return (
    <>
      <h1>I am Jonathan Ogwumike</h1>
      <p>And I'm a Data Analyst</p>
      <Button href='/data' size='lg' variant='outline-primary'>
        Portfolio
      </Button>
    </>
  )
}

export default HeroDetails