const express = require('express')
const routerFeedback = express.Router()
const FeedbackController = require('../app/controllers/FeedbackController')
const { authenticatedAdmin } = require('../config/db/authenticatedAdmin')



// routerFeedback
//     .route("/trash")
//     .get(authenticatedAdmin, FeedbackController.trash)

// routerFeedback.put('/restore/:id',
//     authenticatedAdmin, FeedbackController.restore)
routerFeedback
    .route("/product/:id")
    .get(FeedbackController.getProduct)
routerFeedback
    .route("/:id")
    .get(FeedbackController.getOne)
    .put(FeedbackController.put)
    .delete(authenticatedAdmin, FeedbackController.delete)
routerFeedback
    .route("/")
    .get(authenticatedAdmin, FeedbackController.get)
    .post(FeedbackController.post)


module.exports = routerFeedback