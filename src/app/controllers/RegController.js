const User = require('../models/User');
var bcrypt = require('bcryptjs');
const Token = require('../../config/db/config');
var jwt = require('jsonwebtoken');

class RegController {
    post(req, res, next) {
        try {
            const formData = req.body
            if (formData.password.length <= 3 || formData.username.length <= 5 || formData?.phone.length <= 9) {
                return res.status(500).send(
                    {
                        error: {
                            username: `Username must be at least 6 characters long`,
                            phone: `Phone must be at least 10 characters long`,
                            password: `Password must be at least 4 characters long`
                        }
                    })

            }
            // mã hóa password
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(formData.password, salt);
            var password =formData.password
            formData.password = hash
            formData.name = formData.username

            // console.log(formData);
            const Users = new User(formData)
            Users.save()
                .then(() =>
                    User.findOne({ username: formData.username })
                        .then((user) => {
                            user === null ?
                                res.status(401).send({
                                    error: "Invalid username or password.",
                                }) :
                                bcrypt.compare(password, user.password, function (err, check) {

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


                )
                .catch((error) => {
                    res.status(500).send(error)
                })

        } catch (error) {
            res.status(500).send(error)
        }

    }
}
module.exports = new RegController;
