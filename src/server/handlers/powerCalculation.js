import { Router } from 'express'

import { calculateLinkStationWithMostPowerForGivenCoordinates, defaultLinkStations } from '../utils/linkStationsHelper'

/**
 * API for getting the best link station and power from it for given coordinates
 * Assumes default coordinate of 0 for x and y if not given
 */
const powerCalculations = Router()
  .get('/power', (req, res) => {
    const x = parseInt(req.query.x)
    const y = parseInt(req.query.y)

    if (isNaN(x) || isNaN(y)) {
      const invalidInput = 'Invalid input'
      return res.status(400).send(invalidInput)
    }
    const coordinates = calculateLinkStationWithMostPowerForGivenCoordinates(x, y)
    return res.status(200).send(coordinates)
  })

  /**
   * Small instructions on how to use this API
   */
  .get('/', (req, res) => {
    res.status(200).send(`Available link stations are: ${JSON.stringify(defaultLinkStations)}. Use /power?x=0&y=0 (where 0 is your desired coordinate) to calculate best link station and available power.`)
  })

export default powerCalculations
