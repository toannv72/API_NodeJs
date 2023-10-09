const Order = require('../models/Order');
var bcrypt = require('bcryptjs');
const Token = require('../../config/db/config');
var jwt = require('jsonwebtoken');
const Product = require('../models/Product');

class OrderController {

    getAdmin(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            Order.paginate({}, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the order.' });
        }

    }
    getUser(req, res, next) {
        try {
            // Tìm đơn hàng theo ID và kiểm tra quyền truy cập của người dùng
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            Order.find({ user: checkTokenValid.user._id })
                .then((order) => {

                    res.json(order);
                })
                .catch((err) => {
                    res.json(err);

                })

            // Trả về thông tin đơn hàng
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the order.' });
        }

    }

    getUserPending(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            Order.paginate({ user: checkTokenValid.user._id, status: "Pending" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getUserProcessing(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            Order.paginate({ user: checkTokenValid.user._id, status: "Processing" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getUserProcessing(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            Order.paginate({ user: checkTokenValid.user._id, status: "Processing" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getUserProcessing(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            Order.paginate({ user: checkTokenValid.user._id, status: "Processing" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getUserShipped(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            Order.paginate({ user: checkTokenValid.user._id, status: "Shipped" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getUserDelivered(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            Order.paginate({ user: checkTokenValid.user._id, status: "Delivered" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getUserCanceled(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            Order.paginate({ user: checkTokenValid.user._id, status: "Canceled" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getUserReturned(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            Order.paginate({ user: checkTokenValid.user._id, status: "Returned" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }



    getAdminPending(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            Order.paginate({ status: "Pending" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getAdminProcessing(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            Order.paginate({ status: "Processing" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getAdminProcessing(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            Order.paginate({ status: "Processing" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getAdminProcessing(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            Order.paginate({ status: "Processing" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getAdminShipped(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            Order.paginate({ status: "Shipped" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getAdminDelivered(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            Order.paginate({ status: "Delivered" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getAdminCanceled(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            Order.paginate({ status: "Canceled" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getAdminReturned(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            Order.paginate({ status: "Returned" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getOne(req, res, next) {
        try {
            const id = req.params.id; // Lấy ID của đơn hàng từ URL
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            // Tìm đơn hàng theo ID và kiểm tra quyền truy cập của người dùng
            Order.findById(id)
                .then((order) => {

                    if (!order) {
                        return res.status(404).json({ error: 'Order not found.' });
                    }
                    //  Kiểm tra xem người dùng có quyền truy cập đơn hàng không
                    if (checkTokenValid.user._id.toString() === order.user.toString() || checkTokenValid.user.admin) {
                        return res.json(order);
                    }
                    return res.status(403).json({ error: 'You do not have permission to access this order.' });
                })
                .catch(next => {
                    res.status(500).json(next)
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the order.' });
        }

    }

    getOrderUser(req, res, next) {
        try {
            const id = req.params.id; // Lấy ID của đơn hàng từ URL
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            // Tìm đơn hàng theo ID và kiểm tra quyền truy cập của người dùng
            Order.findById(id)
                .then((order) => {

                    if (!order) {
                        return res.status(404).json({ error: 'Order not found.' });
                    }
                    //  Kiểm tra xem người dùng có quyền truy cập đơn hàng không
                    if (checkTokenValid.user._id.toString() === order.user.toString() || checkTokenValid.user.admin) {
                        return res.json(order);
                    }
                    return res.status(403).json({ error: 'You do not have permission to access this order.' });
                })
                .catch(next => {
                    res.status(500).json(next)
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the order.' });
        }

    }

    check(req, res, next) {
        const { products } = req.body;

        async function checkProducts() {
            for (var i = 0; i < products.length; i++) {
                const productId = products[i]._id;
                const quantityToReduce = products[i].quantity;
                try {
                    // Kiểm tra xem sản phẩm có đủ số lượng trong kho không
                    const dbProduct = await Product.findById(productId);
                    if (!dbProduct || dbProduct.quantity < quantityToReduce) {
                        return res.status(400).json({ error: `Sản phẩm ${dbProduct.name} không đủ trong kho.` });
                    }
                } catch (error) {
                    return res.status(500).json(error);
                }
            }
            // Nếu tất cả sản phẩm đều đủ số lượng, thực hiện các yêu cầu tiếp theo
            return next();
        }

        // Gọi hàm async để chạy vòng lặp và kiểm tra sản phẩm
        checkProducts();
    }
    post(req, res, next) {
        var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
        const { products, totalAmount, shippingAddress, status, description, email, name, phone } = req.body;

        for (var i = 0; i < products.length; i++) {
            const productId = products[i]._id;
            const quantityToReduce = products[i].quantity;
            // Kiểm tra xem sản phẩm có đủ số lượng trong kho không
            Product.findById(productId)
                .then((dbProduct) => {
                    const a = dbProduct.quantity - quantityToReduce;
                    Product.findByIdAndUpdate(dbProduct._id, { quantity: a })
                        .then((Product) => {

                        })
                })
                .catch((error) => {
                    return res.status(500).json(error);
                })
        }

        const newOrder = new Order({
            user: checkTokenValid.user._id,
            products,
            totalAmount: totalAmount,
            shippingAddress: shippingAddress,
            description,
            status,
            email,
            name,
            phone
        });
        newOrder.save()
            .then((rating) => {
                return res.json(rating)
            })
            .catch((error) => {
                return res.status(500).json(error);
            })
    }
    putAdminStatus(req, res, next) {
        try {
            const { status } = req.params; // Lấy status
            const { orders } = req.body;
            console.log(11111111111, orders);
            for (const orderId of orders) {
                Order.findByIdAndUpdate({ _id: orderId }, { status: status })
                    .catch(err => res.json({ error: err }))
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not update the order.' });
        }
    }
    put(req, res, next) {
        try {
            const { id } = req.params; // Lấy ID của đơn hàng từ URL
            const { status, shippingAddress } = req.body;

            // Kiểm tra xem đơn hàng tồn tại
            Order.findById(id)
                .then((existingOrder) => {
                    if (!existingOrder) {
                        return res.status(404).json({ error: 'Order not found.' });
                    }

                    // Kiểm tra xem người dùng có quyền cập nhật đơn hàng không
                    if (existingOrder.user.toString() !== req.user._id.toString()) {
                        return res.status(403).json({ error: 'You do not have permission to update this order.' });
                    }

                    // Cập nhật thông tin đơn hàng
                    existingOrder.status = status;
                    existingOrder.shippingAddress = shippingAddress;

                    // Lưu đơn hàng đã cập nhật vào cơ sở dữ liệu
                    const updatedOrder = existingOrder.save();

                    // Trả về đơn hàng đã cập nhật thành công
                    res.json(updatedOrder);
                })


        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not update the order.' });
        }

    }

    delete(req, res, next) {
        Order.delete({ _id: req.params.id })
            .then((Product => {
                res.send(Product)
            }
            ))
            .catch(next => res.status(500).json({ error: 'Could not retrieve product.' }))

    } catch(error) {
        res.status(500).json(error);

    }
}
module.exports = new OrderController;
