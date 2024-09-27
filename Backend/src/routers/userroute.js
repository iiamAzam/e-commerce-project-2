const express = require('express')
const {creatuser,login}=require('../controllers/usercontroller')
const verify=require('../middlewares/middleware')
const routes=express.Router()

routes.post('/register', creatuser)
routes.post('/login',verify,login)

module.exports=routes