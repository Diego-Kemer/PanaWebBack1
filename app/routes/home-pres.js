const route = require('express').Router()
const {getPres, savePres, updatePres} = require('../controlers/home-pres')

route.get('/', getPres)

route.post('/', savePres)

route.patch('/:id', updatePres)

module.exports = route