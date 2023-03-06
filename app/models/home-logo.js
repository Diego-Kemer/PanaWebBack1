const {Schema, model} = require('mongoose')

const logo = new Schema({
    url: {type: String}
})

module.exports = model('logo', logo)