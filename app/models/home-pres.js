const { Schema, model } = require('mongoose')

const presesntacion = new Schema({
    titulo: {type: String},
    descripcion: {type: String},
    url: {type: String}
})

module.exports = model('presentacion', presesntacion)