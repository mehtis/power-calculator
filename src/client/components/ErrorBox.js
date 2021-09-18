import React from 'react'
import PropTypes from 'prop-types'

const ErrorBox = props => {
  return (
    <p
      className='error'
      // If more styling is needed, use something else than just style (e.g. CSS-in-JS)
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
