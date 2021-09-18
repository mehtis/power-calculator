import express from 'express'
import morgan from 'morgan'
import { join } from 'path'

import powerCalculation from './handlers/powerCalculation'

const app = express()
const port = process.env.PORT || 8081

app.use(morgan('short'))
app.set('view engine', 'ejs')
app.set('views', join(__dirname, '../public'))

app.use('/api', powerCalculation)

app.use('/dist', express.static(join(__dirname, '../../dist')))

app.get('*', (req, res) => res.render('index'))

app.listen(port, console.log(`Listening on port ${port}`))
