const express = require('express')
const dotenv = require('dotenv')
const routes = require('./routes')

require('./database')

dotenv.config()

const app = express()

app.use(express.json())
app.use(routes)

app.listen(process.env.PORT, () => {
  console.log(`Node Server on ${process.env.PORT}`)
})
