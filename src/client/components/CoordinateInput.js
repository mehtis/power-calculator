import React from 'react'
import PropTypes from 'prop-types'
import { Input, InputLabel } from '@material-ui/core'

const CoordinateInput = props => {
  return (
    <div className='input'>
      <InputLabel
        htmlFor={props.id}
        required={props.required}
      >
        X
      </InputLabel>
      <Input
        id={props.id}
        name={props.name}
        type='number'
        inputProps={{ ...props.inputProps }}
        required={props.required}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

CoordinateInput.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  inputProps: PropTypes.object,
  required: PropTypes.bool,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default CoordinateInput
