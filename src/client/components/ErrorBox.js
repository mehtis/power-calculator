import React from 'react'

const ErrorBox = props => {
  return (
    <p className='error'>
      {props.message}
    </p>
  )
}

export default ErrorBox
