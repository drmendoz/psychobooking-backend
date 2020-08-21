const express= require('express')
const cors = require('cors');
const app=express()
const mongoose = require('mongoose')
const puerto=8000
mongoose.connect('mongodb+srv://david:admin@cluster0.bbanj.gcp.mongodb.net/consultas?retryWrites=true&w=majority',()=> console.log('Conexion exitosa a base de datos..'))


const authRouter= require('./routes/auth.routes')
app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/psychobooking',authRouter)

app.listen(puerto,()=>console.log("Servidor escuchando en el puerto "+puerto))