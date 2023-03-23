const route = require('express').Router()
const {getDatos, updateData, createData} = require('../controlers/home-datos')

route.get('/', getDatos)

route.post('/', createData)

route.patch('/:id', updateData)

module.exports = route