const Product = require('../models/Product');
class movieControllers {
    index(req, res, next) {
        try {
            Product.findOne({ slug: req.params.slug })
                .then((movies => {
                    res.json(movies)
                }
                ))
                .catch(next)
        } catch (err) {
            res.json(err)
        }


    }

    put(req, res, next) {

        Product.findOneAndUpdate({ slug: req.params.slug },
            req.body)
            .then((movies => {
                res.json(movies)
            }
            ))
            .catch(next =>
                res.json(next)
            )
    }

    search(req, res, next) {
        function escapeRegExp(text) {
            return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        }
        const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
        const limit = parseInt(req.query.limit) || 10; // Số lượng phần tử trên mỗi trang, mặc định là 10
        const formData = req.query.name
        const escapedSearchTerm = escapeRegExp(formData);

        const options = {
            page: page,
            limit: 5,

            // tùy chọn xác định cách sắp xếp và so sánh trong truy vấn.
            collation: {
                locale: 'en',
            },
        };
        if (formData === "") {

            Product.find({})
                .then((movies) => {
                    res.json({ "movie": [movies] })
                })
                .catch(next)
        } else {

            Product.paginate({ name: { $regex: escapedSearchTerm } }, options, function (err, result) {

                if (result.totalPages < result.page) {
                    const options1 = {
                        page: result.totalPages,
                        limit: 5,

                        // tùy chọn xác định cách sắp xếp và so sánh trong truy vấn.
                        collation: {
                            locale: 'en',
                        },
                    };
                    Product.paginate({ name: { $regex: escapedSearchTerm } }, options1, function (err, data) {


                        return res.json(
                            {
                                movie: (data.docs),
                                totalPages: data.totalPages,
                                page: result.totalPages,
                                prevPage: data.prevPage,
                                nextPage: data.nextPage,
                                totalDocs: data.totalDocs,
                                search: formData
                            })

                    })

                } else {

                    return res.json(
                        {
                            movie: (result.docs),
                            totalPages: result.totalPages,
                            page: result.page,
                            prevPage: result.prevPage,
                            nextPage: result.nextPage,
                            totalDocs: result.totalDocs,
                            search: formData
                        })
                }
            });
        }


    }

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

    show(req, res, next) {
        const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
        const limit = parseInt(req.query.limit) || 100; // Số lượng phần tử trên mỗi trang, mặc định là 10
        console.log(1111111111111, page);

        const options = {
            page: page,
            limit: limit,

            // tùy chọn xác định cách sắp xếp và so sánh trong truy vấn.
            collation: {
                locale: 'en',
            },
        };
        Product.paginate({}, options, function (err, result) {

            res.json(result)
        })
    }

}
module.exports = new movieControllers;
