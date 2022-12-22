const mongoose = require('mongoose')
const monoosePaginate = require('mongoose-paginate-v2')

const squema = new mongoose.Schema({
    name: {type: String},
    description: {type: String},
    price: {type: Number},
    categoria: {type: String},
    imagen: {type: String}
},{
    //Para deshabilitar el dato de la versión por defecto
    versionKey: false,
    //Para que nos de la fecha de creación y actualización
    timestamps: true
})

squema.plugin(monoosePaginate)

module.exports = mongoose.model('producto', squema)