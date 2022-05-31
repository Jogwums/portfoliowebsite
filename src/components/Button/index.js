import React from 'react'

import { Button as Btn } from 'react-bootstrap'

const Button = ({text, type, size}) => {
  return (
    <>
        <Btn variant={type} size={size}>
            {text}
        </Btn>
    </>
  )
}

export default Button