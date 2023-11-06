const Order = require('../models/Order');
var bcrypt = require('bcryptjs');
const Token = require('../../config/db/config');
var jwt = require('jsonwebtoken');
const Product = require('../models/Product');
const moment = require('moment');
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
    getUserAll(req, res, next) {
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
            Order.paginate({ user: checkTokenValid.user._id}, options)
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
    getAdminAll(req, res, next) {
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
                    const b = dbProduct.sold + quantityToReduce;
                    Product.findByIdAndUpdate(dbProduct._id, { quantity: a, sold: b })
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
    // putAdminStatus(req, res, next) {
    //     try {
    //         const { status } = req.params; // Lấy status
    //         const { orders } = req.body;
    //         console.log(22222222, orders);
    //         for (const orderId of orders) {
    //             console.log(11111111, orders);
    //             Order.findByIdAndUpdate({ _id: orderId }, { status: status })
    //                 .catch(err => res.json({ error: err }))
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).json({ error: 'Could not update the order.' });
    //     }
    // }
    async putAdminStatus(req, res, next) {
        try {
            const { status } = req.params; // Lấy status
            const { orders } = req.body;
            for (const orderId of orders) {
                try {
                    // Sử dụng await để chờ cho đến khi cập nhật được hoàn thành
                    await Order.findByIdAndUpdate({ _id: orderId }, { status: status });
                } catch (err) {
                    // Xử lý lỗi khi cập nhật không thành công
                    console.error(`Error updating order ${orderId}: ${err.message}`);
                    // Bạn có thể quyết định liệu bạn muốn tiếp tục với các lệnh tiếp theo hoặc dừng luồng ở đây.
                    // Nếu bạn muốn dừng, bạn có thể sử dụng return hoặc throw err.
                }
            }
    
            // Trả về kết quả thành công nếu mọi thứ đều ok
            res.json({ message: 'Orders updated successfully.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not update the orders.' });
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

    getAdminDeliveredByMonth(req, res, next) {
        try {
            const year = parseInt(req.query.year) || moment().year(); // Năm hiện tại, mặc định là năm hiện tại
            // Chuyển đổi ngày bắt đầu và ngày kết thúc thành đối tượng Date
            const startDate = new Date(`${year}-01-01T00:00:00.000Z`);
            const endDate = new Date(`${year}-12-31T23:59:59.999Z`);
    
            // Truy vấn tổng tiền của đơn hàng theo từng tháng trong năm
            Order.aggregate([
                {
                    $match: {
                        status: "Delivered", // hoặc bất kỳ trạng thái đơn hàng nào bạn muốn
                        createdAt: {
                            $gte: startDate, // Ngày bắt đầu của năm
                            $lte: endDate // Ngày kết thúc của năm
                        }
                    }
                },
                {
                    $group: {
                        _id: { month: { $month: "$createdAt" } }, // Nhóm theo tháng
                        totalAmount: { $sum: "$totalAmount" }, // Tính tổng tiền của các đơn hàng trong nhóm
                        totalQuantity: { $sum: { $sum: "$products.quantity" } } 
                    }
                },
                {
                    $sort: { "_id.month": 1 } // Sắp xếp theo tháng
                }
            ]).then((result) => {
                res.json(result);
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the total amounts.' });
        }
    }
}
module.exports = new OrderController;
