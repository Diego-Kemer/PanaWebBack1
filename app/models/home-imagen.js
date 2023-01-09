const {Schema, model} = require('mongoose')

const imagen = new Schema({
    url: {type: String}
})

module.exports = model('imagen', imagen)