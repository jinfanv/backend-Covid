const express = require('express')
const bodyParser = require('body-parser')
const routers = require('./router/routes')

let app = express()
app.use(bodyParser.json())

routers(app)
app.listen(3000)