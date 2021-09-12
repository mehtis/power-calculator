const express = require('express')
const morgan = require('morgan')

const powerCalculation = require('./handlers/powerCalculation')

const app = express()
const port = 8081

app.use(morgan('short'))

app.use('/', powerCalculation)

app.listen(port, console.log(`Listening on port ${port}`))
