const express = require('express')

const linkStationsHelper = require('../utils/linkStationsHelper')

const powerCalculations = express.Router()
  .get('/power', (req, res) => {
    const x = parseInt(req.query.x) || 0
    const y = parseInt(req.query.y) || 0

    const result = linkStationsHelper.calculateMostPower(x, y)
    res.status(200).send(result)
  })

  .get('/', (req, res) => {
    res.status(200).send(`Available link stations are: ${JSON.stringify(linkStationsHelper.linkStations)}. Use /power?x=0&y=0 (where 0 is your desired coordinate) to calculate best link station and available power.`)
  })

module.exports = powerCalculations
