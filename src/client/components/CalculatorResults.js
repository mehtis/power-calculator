import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const CalculatorResults = props => {
  const [results, setResults] = useState(null)

  useEffect(() => {
    props.calculationSearchCoordinates && props.resultCoordinates
      ? setResults(`Best link station for point ${props.calculationSearchCoordinates.x},${props.calculationSearchCoordinates.y} is ${props.resultCoordinates.x},${props.resultCoordinates.y} with power ${props.resultCoordinates.power}`)
      : setResults(`No link station within reach for point ${props.calculationSearchCoordinates.x}, ${props.calculationSearchCoordinates.y}`)
  }, [props.calculationSearchCoordinates, props.resultCoordinates])

  return (
    <p>
      {results}
    </p>
  )
}

CalculatorResults.propTypes = {
  calculationSearchCoordinates: PropTypes.shape({
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }),
  resultCoordinates: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    power: PropTypes.number
  })
}

export default CalculatorResults
