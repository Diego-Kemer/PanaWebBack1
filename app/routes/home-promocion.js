const route = require('express').Router()
const {getPromociones, addPromocion, updatePromocion} = require('../controlers/home-promocion')

route.get('/', getPromociones)

route.post('/', addPromocion)

route.patch('/:id', updatePromocion)

module.exports = route;