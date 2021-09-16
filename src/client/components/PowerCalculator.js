import React, { useCallback, useState } from 'react'
import { Input, Button } from '@material-ui/core'

import request from '../utils/request'

const PowerCalculator = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [isFetching, setIsFetching] = useState(false)
  const [calculationResult, setcalculationResult] = useState('')

  const onChangeXInput = event => setX(event.target.value)
  const onChangeYInput = event => setY(event.target.value)

  // TODO: Input values not updated in time
  const fetchBestStation = useCallback(async () => {
    setIsFetching(true)
    const url = `/api/power?x=${x}&y=${y}`
    try {
      const result = await request(url)
      setcalculationResult(result.data)
    } catch (error) {

    } finally {
      setIsFetching(false)
    }
  }, [isFetching])

  return (
    <div className='power-calculator'>
      <div className='inputs'>
        <Input
          name='input-x'
          type='number'
          min='0'
          max='100'
          required
          value={x}
          onChange={onChangeXInput}
        />
        <Input
          name='input-y'
          type='number'
          min='0'
          max='100'
          required
          value={y}
          onChange={onChangeYInput}
        />
      </div>
      <Button
        variant='contained'
        disabled={isFetching}
        onClick={fetchBestStation}
      >
        Calculate
      </Button>
      {calculationResult && <p>{calculationResult}</p>}
    </div>
  )
}

export default PowerCalculator
