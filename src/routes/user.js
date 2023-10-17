const express = require('express')
const routerUser = express.Router()
const UserController = require('../app/controllers/UserController')
const { authenticatedStaff } = require('../config/db/authenticatedStaff')



routerUser
    .route("/changePassword/")
    .put( UserController.changePassword)

routerUser
    .route("/trash")
    .get(authenticatedStaff, UserController.trash)

routerUser.put('/restore/:id',
    authenticatedStaff, UserController.restore)

routerUser
    .route("/:id")
    .get(UserController.getOne)
    .put(UserController.put)
    .delete(authenticatedStaff, UserController.delete)
routerUser
    .route("/")
    .get(authenticatedStaff, UserController.get)
    .post(UserController.post)


module.exports = routerUser