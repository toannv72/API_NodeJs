const express = require('express')
const routerCustomOrder = express.Router()
const CustomOrderController = require('../app/controllers/CustomOrderController')
const { authenticatedAdmin } = require('../config/db/authenticatedAdmin')

// routerCustomOrder
//     .route("/user/pending")
//     .get(CustomOrderController.getUserPending)
// routerCustomOrder
//     .route("/user/processing")
//     .get(CustomOrderController.getUserProcessing)
// routerCustomOrder
//     .route("/user/shipped")
//     .get(CustomOrderController.getUserShipped)
// routerCustomOrder
//     .route("/user/delivered")
//     .get(CustomOrderController.getUserDelivered)
// routerCustomOrder
//     .route("/user/canceled")
//     .get(CustomOrderController.getUserCanceled)
// routerCustomOrder
//     .route("/user/returned")
//     .get(CustomOrderController.getUserReturned)

// routerCustomOrder
//     .route("/admin/pending")
//     .get(CustomOrderController.getAdminPending)
// routerCustomOrder
//     .route("/admin/processing")
//     .get(CustomOrderController.getAdminProcessing)
// routerCustomOrder
//     .route("/admin/shipped")
//     .get(CustomOrderController.getAdminShipped)
// routerCustomOrder
//     .route("/admin/delivered")
//     .get(CustomOrderController.getAdminDelivered)
// routerCustomOrder
//     .route("/admin/canceled")
//     .get(CustomOrderController.getAdminCanceled)
// routerCustomOrder
//     .route("/admin/returned")
//     .get(CustomOrderController.getAdminReturned)


// routerCustomOrder
//     .route("/admin/put/:status")
//     .put(authenticatedAdmin, CustomOrderController.putAdminStatus)


routerCustomOrder
    .route("/user/:id")
    .get(CustomOrderController.getOrderUser)


routerCustomOrder
    .route("/user")
    .get(CustomOrderController.getUser)
    .post( CustomOrderController.post)


// routerCustomOrder
//     .route("/:id")
//     .get(authenticatedAdmin, CustomOrderController.getOne)
//     .put(authenticatedAdmin, CustomOrderController.put)
//     .delete(authenticatedAdmin, CustomOrderController.delete)
// routerCustomOrder
//     .route("/")
//     .get(CustomOrderController.getAdmin)
//     .post(CustomOrderController.check, CustomOrderController.post)


module.exports = routerCustomOrder