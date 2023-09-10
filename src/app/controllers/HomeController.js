
const Product = require('../models/Product');
class homeControllers {
    index(req, res, next) {
        try {
            Product.find({})
                .then((products => {
           
                    res.status(200).json(products)
                }
                ))
                .catch(next)
        } catch (err) {
            req.json(err)
        }
    }

}
module.exports = new homeControllers;
