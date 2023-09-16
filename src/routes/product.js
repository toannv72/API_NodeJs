const express = require('express')
const routerProduct = express.Router()
const  ProductControllers  = require('../app/controllers/ProductControllers')
const {authenticatedAdmin} = require('../config/db/authenticatedAdmin')



routerProduct.delete('/:id', ProductControllers.delete)
routerProduct.get('/search?', ProductControllers.search)
routerProduct.get('/:id', ProductControllers.get)
routerProduct.put('/:id', ProductControllers.put)
routerProduct.post('/', ProductControllers.post)
routerProduct.get('/', ProductControllers.show)

module.exports = routerProduct