import React from 'react'
import PropTypes from 'prop-types'

const ErrorBox = props => {
  return (
    <p
      className='error'
      style={{ color: 'red' }}
    >
      {props.message}
    </p>
  )
}

ErrorBox.propTypes = {
  message: PropTypes.string
}

export default ErrorBox
