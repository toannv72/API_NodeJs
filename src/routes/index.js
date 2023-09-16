
const routerLogin = require("./login");
const routerReg = require("./reg");
const routerHome = require("./home");
const router404 = require("./Error404");
const routerProduct = require("./product");
const routerTable = require("./table");
const routerOrder = require("./order");

module.exports = function (app) {
  app.use('/api/login', routerLogin) //oke
  app.use('/api/reg', routerReg)
  app.use('/api/product', routerProduct)
  app.use('/api/order', routerOrder)



  app.use('/api/table', routerTable)
  app.use('/api/', routerHome)
  app.use('*', router404)
};