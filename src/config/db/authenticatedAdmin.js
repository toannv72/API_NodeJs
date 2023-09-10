var jwt = require("jsonwebtoken");

var Token = require("./config");

module.exports = {
  authenticatedAdmin: function (req, res, next) {
    if (req.cookies.accessToken) {
      try {
        var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
        if (checkTokenValid.user.admin) {
          return next();
        }
        else {
          // res.redirect("/login");
          // res.send("khong co quyen truy cap")
          return res.status(401).json({401:'401' })
        }
      } catch (err) {
        return res.status(401).json({401:'401' })
      }
    }
    return res.status(401).json({401:'401' })
  },
};
