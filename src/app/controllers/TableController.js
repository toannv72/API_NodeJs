
const { mutipleMongooseToObject, mongoosesToObject } = require('../../util/mongoose');
const Token = require('../../config/db/config');
const Movie = require('../models/Product');
var jwt = require('jsonwebtoken');
class TableController {
    // edit(req, res, next) {
    //     Movie.findById(req.params.id)
    //         .then((movies => {
    //             res.render('view/table/edit',
    //                 {
    //                     movie: mongoosesToObject(movies)
    //                 })

    //         }
    //         ))
    //         .catch(next)
    // }


    put(req, res, next) {

        Movie.findByIdAndUpdate(req.params.id,
            req.body)
            .then((movies => {
                res.redirect('back')
            }
            ))
            .catch(next)
    }

    delete(req, res, next) {
        Movie.findByIdAndDelete(req.params.id)
            .then((movies => {
                res.redirect('back')
            }
            ))
            .catch(next)
    }

    show(req, res, next) {
        const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
        const limit = parseInt(req.query.limit) || 10; // Số lượng phần tử trên mỗi trang, mặc định là 10
        console.log(1111111111111, page);

        const options = {
            page: page,
            limit: 5,

            // tùy chọn xác định cách sắp xếp và so sánh trong truy vấn.
            collation: {
                locale: 'en',
            },
        };
        Movie.paginate({}, options, function (err, result) {
            // if (result.totalPages < result.page) {
            //     const options1 = {
            //         page: result.totalPages,
            //         limit: 5,

            //         // tùy chọn xác định cách sắp xếp và so sánh trong truy vấn.
            //         collation: {
            //             locale: 'en',
            //         },
            //     };
            //     Movie.paginate({}, options1, function (err, data) {
            //         console.log(1111111111111111, data.docs);
            //         return res.json(data);
            //         // return res.render('view/table/table',
            //         //     {
            //         //         movie: mutipleMongooseToObject(data.docs),
            //         //         login: true,
            //         //         totalPages: data.totalPages,
            //         //         page: result.totalPages,
            //         //         prevPage: data.prevPage,
            //         //         nextPage: data.nextPage,
            //         //         totalDocs: data.totalDocs,
            //         //     })

            //     })

            // } else {
            // res.render('view/table/table',
            //     {
            //         movie: mutipleMongooseToObject(result.docs),
            //         login: true,
            //         totalPages: result.totalPages,
            //         page: result.page,
            //         prevPage: result.prevPage,
            //         nextPage: result.nextPage,
            //         totalDocs: result.totalDocs,
            //     })
            // })
            res.json(result) })
            // });
            // res.render("download.ejs",{un:req.session.username});

            // Movie.find({})
            //     .then((movies) => {
            //         res.render('view/table/table',
            //             {
            //                 movie: mutipleMongooseToObject(movies),
            //                 login: true
            //             })
            //     })
            //     .catch(next)


        
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

            Movie.find({})
                .then((movies) => {
                    res.redirect('/table')
                })
                .catch(next)
        } else {

            Movie.paginate({ name: { $regex: escapedSearchTerm } }, options, function (err, result) {
                // result.docs
                // result.totalDocs = 100
                // result.limit = 10
                // result.page = 1
                // result.totalPages = 10
                // result.hasNextPage = true
                // result.nextPage = 2
                // result.hasPrevPage = false
                // result.prevPage = null
                // result.pagingCounter = 1
                if (result.totalPages < result.page) {
                    const options1 = {
                        page: result.totalPages,
                        limit: 5,

                        // tùy chọn xác định cách sắp xếp và so sánh trong truy vấn.
                        collation: {
                            locale: 'en',
                        },
                    };
                    Movie.paginate({ name: { $regex: escapedSearchTerm } }, options1, function (err, data) {


                        return res.render('view/table/table',
                            {
                                movie: mutipleMongooseToObject(data.docs),
                                login: true,
                                totalPages: data.totalPages,
                                page: result.totalPages,
                                prevPage: data.prevPage,
                                nextPage: data.nextPage,
                                totalDocs: data.totalDocs,
                                search: formData
                            })

                    })

                } else {

                    console.log(12345);
                    return res.render('view/table/table',
                        {
                            movie: mutipleMongooseToObject(result.docs),
                            login: true,
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
    // search(req, res, next) {
    //     const formData = req.query.name
    //     // res.render("download.ejs",{un:req.session.username});
    //     if (formData === "") {
    //         Movie.find({})
    //             .then((movies) => {
    //                 res.render('view/table/table',
    //                     {
    //                         movie: mutipleMongooseToObject(movies),
    //                         login: true
    //                     })
    //             })
    //             .catch(next)
    //     } else {
    //         Movie.find({ name: { $regex: formData, $options: 'i' } })
    //             .then((movies) => {
    //                 res.render('view/table/table',
    //                     {
    //                         movie: mutipleMongooseToObject(movies),
    //                         login: true,
    //                         search: formData
    //                     })
    //             })
    //             .catch(next)
    //     }


    // }
}
module.exports = new TableController;
