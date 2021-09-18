import React, { useCallback, useState } from 'react'
import { Button } from '@material-ui/core'

import ErrorBox from './ErrorBox'
import CalculatorResults from './CalculatorResults'
import CoordinateInput from './CoordinateInput'

import request from '../utils/request'

const PowerCalculatorView = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [isFetching, setIsFetching] = useState(false)
  const [fetchPerformed, setFetchPerformed] = useState(false)
  const [calculationResult, setcalculationResult] = useState(null)
  const [calculationSearchCoordinates, setcalculationSearchCoordinates] = useState(null)
  const [fetchError, setFetchError] = useState(null)

  const clearFetchError = () => setFetchError(null)

  const onChangeXInput = event => setX(event.target.value)
  const onChangeYInput = event => setY(event.target.value)

  const fetchBestStation = useCallback(async () => {
    clearFetchError()
    setIsFetching(true)
    const url = `/api/power?x=${x}&y=${y}`
    try {
      const result = await request(url)
      setcalculationResult(result.data || null)
      setcalculationSearchCoordinates({ x, y })
      setFetchPerformed(true)
    } catch (error) {
      setFetchError(error.message)
    } finally {
      setIsFetching(false)
    }
  }, [x, y, isFetching, fetchPerformed, calculationResult, calculationSearchCoordinates, fetchError])

  return (
    <div className='power-calculator'>
      <div className='inputs'>
        <CoordinateInput
          id='input-x'
          name='input-x'
          inputProps={{ min: 0, max: 100 }}
          required
          value={x}
          onChange={(event) => onChangeXInput(event)}
        />
        <CoordinateInput
          id='input-y'
          name='input-y'
          inputProps={{ min: 0, max: 100 }}
          required
          value={y}
          onChange={(event) => onChangeYInput(event)}
        />
      </div>
      <Button
        variant='contained'
        disabled={isFetching}
        onClick={fetchBestStation}
      >
        Calculate
      </Button>
      <ErrorBox
        message={fetchError}
      />
      {fetchPerformed &&
        <CalculatorResults
          calculationSearchCoordinates={calculationSearchCoordinates}
          resultCoordinates={calculationResult}
        />}
    </div>
  )
}

export default PowerCalculatorView
