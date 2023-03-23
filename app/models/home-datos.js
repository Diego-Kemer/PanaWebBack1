const { Schema, model } = require('mongoose')

const datos = new Schema({
    nombre: {type: String, required: true},
    insta: {type: String},
    face: {type: String},
    email: {type: String, required: true},
    wspp: {type: Number},
    color1: {type: String},
    color2: {type: String} 
})

module.exports = model('datosHome', datos)