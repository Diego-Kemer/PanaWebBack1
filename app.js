require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT
const {dbConect} = require('./config/mongo')

app.use(cors())
app.use(express.json())

app.use('/api', require('./app/routes'))

dbConect()
app.listen(PORT, ()=>{
    console.log('Escuchando en el ', PORT)
})
