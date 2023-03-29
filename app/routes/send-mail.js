const route = require('express').Router()
const {sendemail} = require('../controlers/send-mail')

route.post('/', sendemail)

module.exports = route