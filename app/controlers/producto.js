const producto = require('../models/products')

const getItems = async (req, res)=>{
    const page = req.params.page;
    const productos = await producto.paginate({}, {page, limit: 20}) 
    try {
        res.json({
            error: false,
            data: productos
        })
    } catch (error) {
        res.json({
            error: true,
            mensaje: `Salió el siguiente error ${error}`
        })
    }
}

const getItemsForCategoria = async (req, res)=>{
    const categoria = req.params.categoria
    const page = req.params.page
    const products = await producto.paginate({categoria}, {page, limit: 20})
    try {
        res.json({
            error: false,
            data: products
        })
    } catch (error) {
        res.json({
            error: true,
            mensaje: `Salió el siguiente error ${error}`  
        })
    }
}

const getItem = async (req, res)=>{
    const id = req.params.id
    const product = await producto.findOne({_id: id})
    try {
        res.json({
            error: false,
            data: product
        })
    } catch (error) {
        res.json({
            error: true,
            mensaje: `Salió el siguiente error ${error}`
        })
    }
}

const createItem = async (req, res)=>{
    const { name, description, categoria, price, imagen } = req.body;
    const productoSave = await producto.create({name, description, categoria, price, imagen})
    try {
        res.json({
            error: false,
            data: productoSave
        })
    } catch (error) {
        res.json({
            error: true,
            mensaje: `Salió el siguiente error ${error}`
        })
    }
}

const updateItem = async (req, res)=>{
    const id = req.params.id;
    const productUpdate = await producto.findOneAndUpdate({ _id: id }, {$set: req.body})
    try {
        res.json({
            error: false,
            data: productUpdate
        })
        
    } catch (error) {
        res.json({
            error: true,
            mensaje: `Salió el siguiente error ${error}`
        })
    }
}

const deleteItem = async (req, res)=>{
    const id = req.params.id
    const productDelete = await producto.findByIdAndDelete({_id: id})    
    try {
        res.json({
            error: false,
            data: productDelete
        })
        
    } catch (error) {
        res.json({
            error: true,
            mensaje: `Salió el siguiente error ${error}`
        })
    }
}

module.exports = {getItem, getItems, getItemsForCategoria, createItem, updateItem, deleteItem}