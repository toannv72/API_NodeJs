const { addLeadingZeros } = require('../../util/UtilsFuntion');
const Product = require('../models/Product');
class ProductControllers {


    put(req, res, next) {

        Product.findByIdAndUpdate(req.params.id,
            req.body, { new: true })
            .then((product => {
                res.json(product)
            }
            ))
            .catch(next =>
                res.json(next)
            )
    }


    trash(req, res, next) {
        Product.findDeleted()
            .then(courses =>
                res.json(courses))
            .catch(next)

    }

    restore(req, res, next) {
        Product.restore({ _id: req.params.id })
            .then(() => {
                Product.findByIdAndUpdate(req.params.id,
                    // req.body
                    {
                        "deleted": false
                    }
                )
                    .then((e) => res.json(e))
                    .catch(next)
            })
            .catch(next)

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
        const materialArray = formData.material
        const course = new Product(formData)
        console.log(Product.find().size);
        // here
        switch (materialArray[0]) {
            case "Gỗ":
                var numberMaterial = 0;
                Product.estimatedDocumentCount({}, (err, count) => {
                    if (err) {
                        console.error(err);
                    } else {
                        if (count > 0) {
                            Product.find({ materialCode: "GAA" })
                                .then(filterProduct => {
                                    if (filterProduct.length === 0) {
                                        var tmpNumberMaterial = numberMaterial + 1;
                                        course.materialName = "GAA" + addLeadingZeros(tmpNumberMaterial);
                                        course.materialCode = "GAA";
                                    } else {
                                        filterProduct.forEach(product => {
                                            var result = product.materialName.slice(3); // Loại bỏ 3 ký tự đầu
                                            var numberResult = parseInt(result, 10); // Chuyển đổi thành số nguyên với hệ cơ số 10
                                            if (numberResult > numberMaterial) {
                                                numberMaterial = numberResult;
                                            }
                                        })
                                        var tmpNumberMaterial = numberMaterial + 1;
                                        course.materialName = "GAA" + addLeadingZeros(tmpNumberMaterial);
                                        course.materialCode = "GAA";
                                    }
                                }).catch(err => {
                                    console.log("Không thể lấy được thông tin của sản phẩm !!!")
                                })
                        } else {
                            var tmpNumberMaterial = numberMaterial + 1;
                            course.materialName = "GAA" + addLeadingZeros(tmpNumberMaterial);
                            course.materialCode = "GAA";
                        }
                    }
                });
                break;
            case "Nhựa":
                var numberMaterial = 0;
                Product.estimatedDocumentCount({}, (err, count) => {
                    if (err) {
                        console.error(err);
                    } else {
                        if (count > 0) {
                            Product.find({ materialCode: "NAA" })
                                .then(filterProduct => {
                                    if (filterProduct.length === 0) {
                                        var tmpNumberMaterial = numberMaterial + 1;
                                        course.materialName = "NAA" + addLeadingZeros(tmpNumberMaterial);
                                        course.materialCode = "NAA";
                                    } else {
                                        filterProduct.forEach(product => {
                                            var result = product.materialName.slice(3); // Loại bỏ 3 ký tự đầu
                                            var numberResult = parseInt(result, 10); // Chuyển đổi thành số nguyên với hệ cơ số 10
                                            if (numberResult > numberMaterial) {
                                                numberMaterial = numberResult;
                                            }
                                        })
                                        var tmpNumberMaterial = numberMaterial + 1;
                                        course.materialName = "NAA" + addLeadingZeros(tmpNumberMaterial);
                                        course.materialCode = "NAA";
                                    }
                                }).catch(err => {
                                    console.log("Không thể lấy được thông tin của sản phẩm !!!")
                                })
                        } else {
                            var tmpNumberMaterial = numberMaterial + 1;
                            course.materialName = "NAA" + addLeadingZeros(tmpNumberMaterial);
                            course.materialCode = "NAA";
                        }
                    }
                });
                break;
            case "Kim loại":
                var numberMaterial = 0;
                Product.estimatedDocumentCount({}, (err, count) => {
                    if (err) {
                        console.error(err);
                    } else {
                        if (count > 0) {
                            Product.find({ materialCode: "KAA" })
                                .then(filterProduct => {
                                    if (filterProduct.length === 0) {
                                        var tmpNumberMaterial = numberMaterial + 1;
                                        course.materialName = "KAA" + addLeadingZeros(tmpNumberMaterial);
                                        course.materialCode = "KAA";
                                    } else {
                                        filterProduct.forEach(product => {
                                            var result = product.materialName.slice(3); // Loại bỏ 3 ký tự đầu
                                            var numberResult = parseInt(result, 10); // Chuyển đổi thành số nguyên với hệ cơ số 10
                                            if (numberResult > numberMaterial) {
                                                numberMaterial = numberResult;
                                            }
                                        })
                                        var tmpNumberMaterial = numberMaterial + 1;
                                        course.materialName = "KAA" + addLeadingZeros(tmpNumberMaterial);
                                        course.materialCode = "KAA";
                                    }
                                }).catch(err => {
                                    console.log("Không thể lấy được thông tin của sản phẩm !!!")
                                })
                        } else {
                            var tmpNumberMaterial = numberMaterial + 1;
                            course.materialName = "KAA" + addLeadingZeros(tmpNumberMaterial);
                            course.materialCode = "KAA";
                        }
                    }
                });
                break;
        }
        // here
        // save thông tin
        course.save()
            .then(() => res.json(req.body))
            .catch((error) => {
                res.json(error)
            })

        // res.send(`oke`)
    }

    show(req, res, next) {
        const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
        const limit = parseInt(req.query.limit) || 10000000000; 
        const sort = parseInt(req.query.sort) || -1; // Trang hiện tại, mặc định là trang 1
        const options = {
            page: page,
            limit: limit,
            // tùy chọn xác định cách sắp xếp và so sánh trong truy vấn.
            collation: {
                locale: 'en',
            },
            sort: { createdAt: sort },
        };
        Product.paginate({}, options, function (err, result) {
            return res.json(result)
        })
    }

    get(req, res, next) {
        try {
            const id = req.params.id
            Product.findById(id)
                .then((Product => {
                    res.json(Product)
                }
                ))
                .catch(next => res.status(500).json({ error: 'Could not retrieve product.' }))

        } catch (error) {
            res.status(500).json({ error: 'Could not retrieve product.' });
        }
    }

    delete(req, res, next) {
        Product.delete({ _id: req.params.id })
            .then((Product => {
                res.send(Product)
            }
            ))
            .catch(next => res.status(500).json({ error: 'Could not retrieve product.' }))

    } catch(error) {
        res.status(500).json(error);

    }



}
module.exports = new ProductControllers;
