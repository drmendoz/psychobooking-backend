const router= require('express').Router()
const {postUsuario,auntentificarUsuario} = require('../controllers/auth.controller')

router.post('/register',postUsuario);
router.post('/login',auntentificarUsuario)

module.exports=router;