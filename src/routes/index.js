const routerCreate = require("./create");
const routerLogin = require("./login");
const routerReg = require("./reg");
const routerHome = require("./home");
const router404 = require("./Error404");
const routerMovie = require("./movie");
const routerTable = require("./table");

module.exports = function (app) {
  app.use('/api/login', routerLogin)
  // app.use('/api/reg', routerReg)
  app.use('/api/create', routerCreate)
  app.use('/api/table', routerTable)
  app.use('/api/', routerHome)
  app.use('/api/product', routerMovie)
  app.use('*', router404)
};