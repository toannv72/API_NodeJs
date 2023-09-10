
const { mutipleMongooseToObject, mongoosesToObject } = require('../../util/mongoose');
const Movie = require('../models/Product');
const User = require('../models/User');
var bcrypt = require('bcryptjs');
const Token = require('../../config/db/config');
var jwt = require('jsonwebtoken');
const url = require('url');
class movieControllers {
    post(req, res, next) {

        const formData = req.body

        User.findOne({ username: formData.username })
            .then((user) => {
                user === null ? res.redirect(path) :
                    bcrypt.compare(formData.password, user.password, function (err, check) {

                        if (check) {
                            // var token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + (10), user }, 'shhhhh');
                            var token = jwt.sign({ user }, Token.refreshToken);
                            res.cookie("accessToken", token);
                            return res.json({...user,accessToken:token})

                        } 
                    });
                // res.json(user)

            })
            .catch(next => {

                res.status(500).json(next)

            })
    }
    show(req, res) {
        const sess = req.session;  //initialize session variable
    
        const errorMessage = sess.errorMessage || '';
        const userName = sess.userName || '';
        sess.errorMessage = '';
        sess.userName = '';
        res.clearCookie("accessToken");
        res.render('view/login/login', {
            login: false,
            errorMessage,
            userName
        })
    }
}
module.exports = new movieControllers;
