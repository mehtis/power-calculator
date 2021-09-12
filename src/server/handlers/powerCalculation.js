const express = require('express')

const {
  calculateLinkStationWithMostPowerForGivenCoordinates,
  linkStations
} = require('../utils/linkStationsHelper')

/**
 * API for getting the best link station and power from it for given coordinates
 * Assumes default coordinate of 0 for x and y if not given
 */
const powerCalculations = express.Router()
  .get('/power', (req, res) => {
    const x = parseInt(req.query.x) || 0
    const y = parseInt(req.query.y) || 0

    const coordinates = calculateLinkStationWithMostPowerForGivenCoordinates(x, y)
    if (!coordinates) {
      const noStationCloseEnoughResult = `No link station within reach for point ${x}, ${y}`
      res.status(200).send(noStationCloseEnoughResult)
    } else {
      const result = `Best link station for point ${x},${y} is ${coordinates.x},${coordinates.y} with power ${coordinates.power}`
      res.status(200).send(result)
    }
  })

  /**
   * Small instructions on how to use this API
   */
  .get('/', (req, res) => {
    res.status(200).send(`Available link stations are: ${JSON.stringify(linkStations)}. Use /power?x=0&y=0 (where 0 is your desired coordinate) to calculate best link station and available power.`)
  })

module.exports = powerCalculations
