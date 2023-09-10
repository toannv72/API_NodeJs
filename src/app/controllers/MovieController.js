const Movie = require('../models/Product');
class movieControllers {
    index(req, res, next) {
        try {
            Movie.findOne({ slug: req.params.name })
                .then((movies => {
                    res.json(movies)
                }
                ))
                .catch(next)
        } catch (err) {
            res.json(err)
        }

        // Movie.findOne({ slug: req.params.name })
        //     .then((movies => {
        //         res.render('view/movie/showMovie',
        //             {
        //                 movie: mongoosesToObject(movies)
        //             })
        //     }
        //     ))
        //     .catch(next)
    }

    show(req, res) {
        res.render('view/home')
    }
}
module.exports = new movieControllers;
