import React from 'react'

const Hero = (props) => {
  const {nav, text} = props
  return (
    <>
        <div className='hero'>
            {nav}
            <div className='heromsg'>
                {text}
            </div>
        </div>
        
    </>
  )
}

export default Hero