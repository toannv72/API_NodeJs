const express = require('express')
const routerProduct = express.Router()
const  MovieControllers  = require('../app/controllers/MovieController')
const {authenticatedAdmin} = require('../config/db/authenticatedAdmin')



routerProduct.delete('/:name', MovieControllers.index)
routerProduct.get('/search?', MovieControllers.search)
routerProduct.get('/:slug', MovieControllers.index)
routerProduct.put('/:slug', MovieControllers.put)
routerProduct.post('/', MovieControllers.post)
routerProduct.get('/', MovieControllers.show)

module.exports = routerProduct