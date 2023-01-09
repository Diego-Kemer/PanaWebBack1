const route = require('express').Router()
const {getOne, getAll, save, update, deleteOne} = require('../controlers/home-imagen')

route.get('/', getAll)

route.get('/:id', getOne)

route.post('/', save)

route.patch('/:id', update)

route.delete('/:id', deleteOne)


module.exports = route