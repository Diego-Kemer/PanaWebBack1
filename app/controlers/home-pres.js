const presentacion = require('../models/home-pres')

const getPres = async (req, res)=>{
    const datos = await presentacion.find({})
    try {
        res.json({
            error: false,
            data: datos
        })
    } catch (e) {
        res.json({
            error: true,
            mensaje: `El servidor devuelve el siguiente error: ${e}`
        })
    }
}

const savePres = async (req, res)=>{
    const {titulo, descripcion} = req.body
    const datos = await presentacion.create({titulo, descripcion, url})
    try {
        res.json({
            error: false,
            data: datos
        })
    } catch (e) {
        res.json({
            error: true,
            mensaje: `El servidor devuelve el siguiente error: ${e}`
        })
    }
}

const updatePres = async (req, res)=>{
    const id = req.params.id
    const datos = await presentacion.findByIdAndUpdate({_id: id}, {$set: req.body})
    try {
        res.json({
            error: false,
            data: datos
        })
    } catch (e) {
        res.json({
            error: true,
            mensaje: `El servidor devuelve el siguiente error: ${e}`
        })
    }
}

module.exports = {getPres, savePres, updatePres}