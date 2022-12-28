const express = require('express')
const router = express.Router()
const { getItem, getItems, getItemsForCategoria, createItem, updateItem, deleteItem } = require('../controlers/producto')

router.get('/:page', getItems);

router.get('/only/:id', getItem)

router.get('/:categoria/:page', getItemsForCategoria)

router.post('/', createItem)

router.patch('/:id', updateItem)

router.delete('/:id', deleteItem)

module.exports = router