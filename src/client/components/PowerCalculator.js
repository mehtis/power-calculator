import React, { useCallback, useState } from 'react'
import { Input, Button, InputLabel } from '@material-ui/core'

import ErrorBox from './ErrorBox'

import request from '../utils/request'

const PowerCalculator = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [isFetching, setIsFetching] = useState(false)
  const [calculationResult, setcalculationResult] = useState('')
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
      setcalculationResult(result.data)
    } catch (error) {
      setFetchError(error.message)
    } finally {
      setIsFetching(false)
    }
  }, [x, y, isFetching, fetchError])

  return (
    <div className='power-calculator'>
      <div className='inputs'>
        <div className='input'>
          <InputLabel
            htmlFor='input-x'
            required
          >
            X
          </InputLabel>
          <Input
            name='input-x'
            id='input-x'
            label='X'
            type='number'
            inputProps={{ min: 0, max: 100 }}
            required
            value={x}
            onChange={onChangeXInput}
          />
        </div>
        <div className='input'>
          <InputLabel
            htmlFor='input-y'
            required
          >
            Y
          </InputLabel>
          <Input
            name='input-y'
            id='input-y'
            label='Y'
            type='number'
            inputProps={{ min: 0, max: 100 }}
            required
            value={y}
            onChange={onChangeYInput}
          />
        </div>
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
      {calculationResult && <p>{calculationResult}</p>}
    </div>
  )
}

export default PowerCalculator
