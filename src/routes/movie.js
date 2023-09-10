const express = require('express')
const routerMovie = express.Router()
const MovieControllers = require('../app/controllers/MovieController')


routerMovie.get('/:name', MovieControllers.index)

module.exports = routerMovie