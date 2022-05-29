import React from 'react'

const Hero = (props) => {
  return (
    <>
        <div className='hero'>
            <div className='heromsg'>
                {props.children}
            </div>
        </div>
        
    </>
  )
}

export default Hero