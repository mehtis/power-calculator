import React from 'react'
import PropTypes from 'prop-types'

const ErrorBox = props => {
  return (
    <p className='error'>
      {props.message}
    </p>
  )
}

ErrorBox.propTypes = {
  message: PropTypes.string
}

export default ErrorBox
