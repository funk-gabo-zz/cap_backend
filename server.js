const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config')
const router = require('./network/routes')
const db = require('./db')

const app = express()
app.use(cors())
app.use(bodyParser.json())
db(config.dbUrl)
router(app)

app.use(config.publicRoute, express.static('public'))


app.listen(config.port)
console.log('La app está escuchando en ' + config.host +':'+ config.port)