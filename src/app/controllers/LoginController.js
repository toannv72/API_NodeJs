
const User = require('../models/User');
var bcrypt = require('bcryptjs');
const Token = require('../../config/db/config');
var jwt = require('jsonwebtoken');

class movieControllers {
    post(req, res, next) {
        const formData = req.body
        User.findOne({ username: formData.username })
            .then((user) => {
                user === null ?
                    res.status(401).send({
                        error: "Invalid username or password.",
                    }) :
                    bcrypt.compare(formData.password, user.password, function (err, check) {

                        if (check) {
                            // var token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + (10), user }, 'shhhhh');
                            var token = jwt.sign({ user }, Token.refreshToken);
                            res.cookie("accessToken", token);
                            return res.json({ ...user, accessToken: token })

                        }
                        return res.status(401).send({
                            error: "Invalid username or password.",
                        })
                    });


            })
            .catch(next => {

                res.status(500).json(next)

            })
    }

}
module.exports = new movieControllers;
