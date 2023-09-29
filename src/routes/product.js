const express = require('express')
const routerProduct = express.Router()
const ProductControllers = require('../app/controllers/ProductControllers')
const { authenticatedAdmin } = require('../config/db/authenticatedAdmin')





// xóa mềm
routerProduct.delete('/:id', authenticatedAdmin, ProductControllers.delete)

// khôi phục dữ liệu đã xóa
routerProduct.put('/restore/:id', authenticatedAdmin, ProductControllers.restore)
// danh sách đã xóa 
routerProduct.get('/trash', authenticatedAdmin, ProductControllers.trash)
routerProduct.get('/search?', ProductControllers.search)

// lấy sản phẩm theo ID 
routerProduct.get('/:id', ProductControllers.get)
routerProduct.put('/:id', ProductControllers.put)
routerProduct.post('/', authenticatedAdmin, ProductControllers.post)
routerProduct.get('/', ProductControllers.show)

module.exports = routerProduct