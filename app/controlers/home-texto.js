const texto = require('../models/home-texto')

const findTexto = async (req, res)=>{
    const datos = await texto.find()
    try {
        res.json({
            data: datos,
            error: false
        })
    } catch (e) {
        res.json({
            error: true,
            mensaje: `El servidor responde el siguiente error: ${e}`

        })
    }
}

const saveTexto = async (req, res)=>{
    const {textLanding, textAbout} = req.body
    const guardado = await texto.create({textLanding, textAbout})
    try {
        res.json({
            data: guardado,
            error: false
        })
    } catch (e) {
        res.json({
            error: true,
            mensaje: `El servidor responde el siguiente error: ${e}`
        })
    }
}

const updateTexto = async (req, res)=>{
    const {textLanding, textAbout} = req.body
    const {id} = req.params
    const datos = await texto.findByIdAndUpdate({_id: id}, {textAbout, textLanding})
    try {
        res.json({
            data: datos,
            error: false
        })
    } catch (e) {
        res.json({
            error: true,
            mensaje: `El servidor responde el siguiente error: ${e}`

        })
    }
}

module.exports = {findTexto, saveTexto, updateTexto}