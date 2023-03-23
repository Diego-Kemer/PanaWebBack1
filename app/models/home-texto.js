const {Schema, model} = require('mongoose')

const homeText = new Schema({
    textLanding: {type: String},
    textAbout: {type: String}
})

module.exports = model('texto', homeText)