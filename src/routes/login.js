const express = require('express')
const routerCreate = express.Router()
const routerLogin = require('../app/controllers/LoginController')

routerCreate
    .route("/")
    .post( routerLogin.post)
    

module.exports = routerCreate