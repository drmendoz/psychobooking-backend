const Usuario = require('../models/usuario.model')

module.exports.postUsuario= (req,res)=>{
    const usuario= new Usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        contrasena: req.body.contrasena
    });

    try{
         usuario.save();
        res.send("Usuario registrado satisfactoriamente");
    }catch(err){
        res.status(400).send("Error al registrar usuario");
    }
};

module.exports.auntentificarUsuario= async (req,res)=>{
    const usuarios= await Usuario.find({email: req.body.email});
    const usuario= usuarios[0];
    if (usuario && usuario.contrasena===req.body.contrasena){
        res.send("Inicio de sesion exitoso");
    }else{
        res.status('401').send('Usuario o Contrasena incorrecta');
    }
}
