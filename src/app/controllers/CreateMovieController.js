
const Product = require('../models/Product');
class movieControllers {
    post(req, res, next) {
        const formData = req.body
        const course = new Product(formData)
        course.save()
            .then(() => res.json(req.body))
            .catch((error) => {
                res.json(error)
            })

        // res.send(`oke`)
    }
    show(req, res) {
        return res.render('view/movie/createMovie',
            { login: true })
    }
}
module.exports = new movieControllers;
