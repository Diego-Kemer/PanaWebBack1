const route = require('express').Router()
const {findTexto, saveTexto, updateTexto} = require('../controlers/home-texto')

route.get('/', findTexto)

route.post('/', saveTexto)

route.patch('/:id', updateTexto)

module.exports = route