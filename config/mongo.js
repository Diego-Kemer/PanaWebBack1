const mongoose = require('mongoose')

const dbConect = ()=>{
    DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res)=>{
        if(!err){
            console.log('Conexión correcta')
        }else{
            console.log('Algo mario sal ', err)
        }
    })
}


module.exports = {dbConect}