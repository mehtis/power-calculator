const express = require('express')

const {
  calculateLinkStationWithMostPowerForGivenCoordinates,
  linkStations
} = require('../utils/linkStationsHelper')

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

  .get('/', (req, res) => {
    res.status(200).send(`Available link stations are: ${JSON.stringify(linkStations)}. Use /power?x=0&y=0 (where 0 is your desired coordinate) to calculate best link station and available power.`)
  })

module.exports = powerCalculations
