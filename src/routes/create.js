const express = require('express')
const routerCreate = express.Router()
const routerCreateMovie = require('../app/controllers/CreateMovieController') 
const { cookieAuthenticated } = require('../config/db/authenticated')
const { authenticatedAdmin } = require('../config/db/authenticatedAdmin')

routerCreate.post('/store',authenticatedAdmin,routerCreateMovie.post)
routerCreate.get('/', cookieAuthenticated,authenticatedAdmin, routerCreateMovie.show)

module.exports = routerCreate