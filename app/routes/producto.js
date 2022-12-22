const express = require('express')
const router = express.Router()
const { getItem, getItems, createItem, updateItem, deleteItem } = require('../controlers/producto')

router.get('/:page', getItems);

router.get('/only/:id', getItem)

router.post('/', createItem)

router.patch('/:id', updateItem)

router.delete('/:id', deleteItem)

module.exports = router