const datos = require('../models/home-datos')

const getDatos = async (req, res)=>{
    const data = await datos.find()
    try {
        res.json({
            error: false,
            data
        })
    } catch (e) {
        res.json({
            error: true,
            mensaje: `El servidor responde el siguiente error: ${e}`
        })
    }
}

const createData = async (req, res)=>{
    const {nombre, face, insta, wspp , email, color1, color2, color3} = req.body;
    const creado = await datos.create({nombre, face, insta, wspp , email, color1, color2, color3})
    try {
        res.json({
            error: false,
            data: creado
        })
    } catch (e) {
        res.json({
            error: true,
            mensaje: `El servidor responde el siguiente error: ${e}`
        })
    }
}

const updateData = async (req, res)=>{
    const id = req.params.id
    const anterior = await datos.findByIdAndUpdate({_id: id}, {$set: req.body})
    try {
        res.json({
            error: false,
            data: anterior
        })
    } catch (e) {
        res.json({
            error: true,
            mensaje: `El servidor responde el siguiente error: ${e}`
        })
    }
}

module.exports = {getDatos, createData, updateData}