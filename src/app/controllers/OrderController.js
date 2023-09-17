const Order = require('../models/Order');
var bcrypt = require('bcryptjs');
const Token = require('../../config/db/config');
var jwt = require('jsonwebtoken');

class OrderController {

    get(req, res, next) {
        try {
            const id = req.params.id; // Lấy ID của đơn hàng từ URL

            // Tìm đơn hàng theo ID và kiểm tra quyền truy cập của người dùng
            const order = Order.findById(id);
            if (!order) {
                return res.status(404).json({ error: 'Order not found.' });
            }

            // Kiểm tra xem người dùng có quyền truy cập đơn hàng không
            if (order.user.toString() !== req.user._id.toString()) {
                return res.status(403).json({ error: 'You do not have permission to access this order.' });
            }

            // Trả về thông tin đơn hàng
            res.json(order);
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
                    if (checkTokenValid.user._id.toString() !== order.user.toString()) {
                        return res.status(403).json({ error: 'You do not have permission to access this order.' });
                    }
                    res.json(order);
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
            const user = req.params.id; // Lấy ID của user
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);

            // Tìm đơn hàng theo ID và kiểm tra quyền truy cập của người dùng
            Order.find({ user: user })
                .then((order) => {
                    if (!order) {
                        return res.status(404).json({ error: 'Order user not found.' });
                    }
                    //  Kiểm tra xem người dùng có quyền truy cập đơn hàng không
                    if (checkTokenValid.user._id.toString() !== user.toString()) {
                        return res.status(403).json({ error: 'You do not have permission to access this order.' });
                    }
                    res.json(order);
                })
                .catch(next => {
                    res.status(500).json(next)
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the order.' });
        }

    }

    post(req, res, next) {
        try {
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);

            // Lấy thông tin đơn hàng từ req.body
            const { products, totalAmount, shippingAddress, status } = req.body;

            // Tạo một đối tượng đơn hàng mới
            const newOrder = new Order({
                user: checkTokenValid.user._id,
                products,
                totalAmount,
                shippingAddress,
                status,
            });

            // Lưu đơn hàng vào cơ sở dữ liệu
            newOrder.save()
                .then((rating) => {
                    return res.json(rating)

                })
                .catch((error) => {
                    return res.status(500).json(error);

                })

        } catch (error) {
            // Xử lý lỗi nếu có
            console.error(error);
            res.status(500).json(error);
        }

    }

    put(req, res, next) {
        try {
            const { id } = req.params; // Lấy ID của đơn hàng từ URL
            const { status, shippingAddress } = req.body;

            // Kiểm tra xem đơn hàng tồn tại
            const existingOrder = Order.findById(id);
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
