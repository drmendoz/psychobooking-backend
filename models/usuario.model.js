const mongoose = require ('mongoose')

const usuarioSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required:true,
    },
    apellido:{
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    }
})

module.exports= mongoose.model('Usuario',usuarioSchema)