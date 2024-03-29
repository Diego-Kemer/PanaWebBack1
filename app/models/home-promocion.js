const { Schema, model } = require('mongoose')

const promocion = new Schema({
    titulo: {type: String},
    descripcion: {type: String},
    img: {type: String},
    precio: {type: Number, required: true}
})

module.exports = model('promocion', promocion)