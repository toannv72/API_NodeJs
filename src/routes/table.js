const express = require('express')
const routerTable = express.Router()
const routerTableController = require('../app/controllers/TableController') 
const { cookieAuthenticated } = require('../config/db/authenticated')
const { authenticatedAdmin } = require('../config/db/authenticatedAdmin')

// routerTable.post('/store', routerTableController.post)
routerTable.post('/edit/:id', cookieAuthenticated,authenticatedAdmin,routerTableController.put)
routerTable.post('/edit/delete/:id',cookieAuthenticated,authenticatedAdmin, routerTableController.delete)
// routerTable.get('/edit/:id',cookieAuthenticated,authenticatedAdmin, routerTableController.edit)
routerTable.get('/search?',cookieAuthenticated,authenticatedAdmin, routerTableController.search)
routerTable.get('/', routerTableController.show)

module.exports = routerTable