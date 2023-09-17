const express = require('express')
const routerRating = express.Router()
const RatingController = require('../app/controllers/RatingController')
const { authenticatedAdmin } = require('../config/db/authenticatedAdmin')



// routerRating
//     .route("/trash")
//     .get(authenticatedAdmin, RatingController.trash)

// routerRating.put('/restore/:id',
//     authenticatedAdmin, RatingController.restore)

routerRating
    .route("/:id")
    .get(RatingController.getOne)
    .put(RatingController.put)
    .delete(authenticatedAdmin, RatingController.delete)
routerRating
    .route("/")
    .get(authenticatedAdmin, RatingController.get)
    .post(RatingController.post)


module.exports = routerRating