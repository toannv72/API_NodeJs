const express = require('express')
const routerOrder = express.Router()
const routerLogin = require('../app/controllers/OrderController')


routerOrder
    .route("/user/:id")
    .get(routerLogin.getOrderUser)

routerOrder
    .route("/:id")
    .get(routerLogin.getOne)
    .put(routerLogin.put)
    .delete(routerLogin.delete)

routerOrder
    .route("/")
    .get(routerLogin.get)
    .post(routerLogin.post)


module.exports = routerOrder