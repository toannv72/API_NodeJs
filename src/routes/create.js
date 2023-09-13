const express = require('express')
const routerCreate = express.Router()
const routerCreateMovie = require('../app/controllers/CreateMovieController') 
const { authenticatedAdmin } = require('../config/db/authenticatedAdmin')

routerCreate.post('/store',authenticatedAdmin,routerCreateMovie.post)

module.exports = routerCreate