const promocion = require('../models/home-promocion')

const getPromociones = async (req, res) => {
    const promociones = await promocion.find({})
    try {
        res.json({
            error: false,
            data: promociones
        })
    } catch (e) {
        res.json({
            error: true,
            mensaje: `El servidor devuelve el siguiente error ${e}`
        })
    }
}
const addPromocion = async (req, res) => {
    const {titulo, descripcion, img, precio} = req.body
    const creado = await promocion.create({titulo, descripcion, img, precio})
    try {
        res.json({
            error: false,
            data: creado
        })
    } catch (e) {
        res.json({
            error: true,
            mensaje: `El servidor devuelve el siguiente error ${e}`
        })
    }
}
const updatePromocion = async (req, res) => {
    const {id} = req.params
    const actual = await promocion.findByIdAndUpdate({_id: id},
        {$set: req.body})
        try {
            res.json({
                error: false,
                data: actual
            })
        } catch (e) {
            res.json({
                error: true,
                mensaje: `El servidor devuelve el siguiente error ${e}`
            })
        }
}

module.exports = {addPromocion, updatePromocion, getPromociones}