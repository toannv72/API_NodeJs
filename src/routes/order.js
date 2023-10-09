const express = require('express')
const routerOrder = express.Router()
const OrderController = require('../app/controllers/OrderController')
const { authenticatedAdmin } = require('../config/db/authenticatedAdmin')

routerOrder
    .route("/user/pending")
    .get(OrderController.getUserPending)
routerOrder
    .route("/user/processing")
    .get(OrderController.getUserProcessing)
routerOrder
    .route("/user/shipped")
    .get(OrderController.getUserShipped)
routerOrder
    .route("/user/delivered")
    .get(OrderController.getUserDelivered)
routerOrder
    .route("/user/canceled")
    .get(OrderController.getUserCanceled)
routerOrder
    .route("/user/returned")
    .get(OrderController.getUserReturned)

routerOrder
    .route("/admin/pending")
    .get(OrderController.getAdminPending)
routerOrder
    .route("/admin/processing")
    .get(OrderController.getAdminProcessing)
routerOrder
    .route("/admin/shipped")
    .get(OrderController.getAdminShipped)
routerOrder
    .route("/admin/delivered")
    .get(OrderController.getAdminDelivered)
routerOrder
    .route("/admin/canceled")
    .get(OrderController.getAdminCanceled)
routerOrder
    .route("/admin/returned")
    .get(OrderController.getAdminReturned)


routerOrder
    .route("/admin/put/:status")
    .put(authenticatedAdmin, OrderController.putAdminStatus)


routerOrder
    .route("/user/:id")
    .get(OrderController.getOrderUser)


routerOrder
    .route("/user")
    .get(OrderController.getUser)
    .post(OrderController.check, OrderController.post)


routerOrder
    .route("/:id")
    .get(authenticatedAdmin, OrderController.getOne)
    .put(authenticatedAdmin, OrderController.put)
    .delete(authenticatedAdmin, OrderController.delete)
routerOrder
    .route("/")
    .get(authenticatedAdmin, OrderController.getAdmin)
    .post(authenticatedAdmin, OrderController.check, OrderController.post)


module.exports = routerOrder