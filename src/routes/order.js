const express = require('express')
const routerOrder = express.Router()
const OrderController = require('../app/controllers/OrderController')


routerOrder
    .route("/user/:id")
    .get(OrderController.getOrderUser)

routerOrder
    .route("/:id")
    .get(OrderController.getOne)
    .put(OrderController.put)
    .delete(OrderController.delete)

routerOrder
    .route("/")
    .get(OrderController.get)
    .post(OrderController.check,OrderController.post)


module.exports = routerOrder