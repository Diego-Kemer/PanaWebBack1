const logo = require('../models/home-logo')

const getLogo = async (req, res)=>{
    const logos = await logo.find()
    try {
        res.json({
            data: logos,
            error: false
        })
    } catch (e) {
        res.json({
            error: true,
            mensaje: `El servidor devuelve el siguiente error: ${e}`
        })
    }
}

const saveLogo = async (req, res)=>{
    const {url} = req.body
    const save = await logo.create({url})
    try {
        res.json({
            error: false,
            data: save
        })
    } catch (e) {
        res.json({
            error: true,
            data: `El servidor responde el siguiente error: ${e}`
        })
    }
}

const updateLogo = async (req, res)=>{
    const {url} = req.body 
    const {id} = req.params
    const updat = await logo.findByIdAndUpdate({_id: id}, {url})
    try {
        res.json({
            error: false,
            data: updat
        })
    } catch (error) {
        res.json({
            error: true,
            data: `El servidor responde el siguiente error: ${error}`
        })
    }
}

module.exports = {getLogo, saveLogo, updateLogo}