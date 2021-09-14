const express = require('express')
const morgan = require('morgan')
const path = require('path')

const powerCalculation = require('./handlers/powerCalculation')

const app = express()
const port = process.env.PORT || 8081

app.use(morgan('short'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../public'))

app.use('/api', powerCalculation)

app.get('*', (req, res) => res.render('index'))

app.listen(port, console.log(`Listening on port ${port}`))
