const imagen = require('../models/home-imagen')

const getAll = async (req, res)=>{
    const imagenes = await imagen.find()
    try {
        res.json({
            error: false,
            data: imagenes
        })
    } catch (e) {
        res.json({
            error: true,
            mensaje: `Salió el siguiente error: ${e}`
        })
    }
}

const getOne = async (req, res)=>{
    const id = req.params.id
    const img = await imagen.find({_id: id})
    try {
        res.json({
            error: false,
            data: img
        })
    } catch (e) {
        res.json({
            error: true,
            mensaje: `Salió el siguiente error: ${e}`
        })
    }
}

const save = async (req, res)=>{
    const {url} = req.body
    const image = await imagen.create({url})
    try {
        res.json({
            error: false,
            data: image
        })
    } catch (e) {
        res.json({
            error: true,
            mensaje: `Salió el siguiente error: ${e}`
        })
    }
}

const update = async (req, res)=>{
    const {id} = req.params
    const {url} = req.body
    const actual = await imagen.findByIdAndUpdate({_id: id}, {url})
    try {
        res.json({
            error: false,
            data: actual
        })
    } catch (e) {
        res.json({
            error: true,
            mensaje: `Salió el siguiente error: ${e}`
        })
    }
}

const deleteOne = async (req, res)=>{
    const {id} = req.params
    const del = await imagen.findByIdAndDelete({_id: id})
    try {
        res.json({
            error: false,
            data: del
        })
    } catch (e) {
        res.json({
            error: true,
            mensaje: `Salió el siguiente error: ${e}`
        })
    }
}

module.exports = {getAll, getOne, save, update, deleteOne}