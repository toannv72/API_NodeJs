const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true }, // Tham chiếu đến người dùng đã đặt hàng
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, // Tham chiếu đến sản phẩm đã đặt
            quantity: { type: Number, default: 1 }, // Số lượng sản phẩm đã đặt (mặc định là 1)
            price: { type: Number, required: true }, // Giá sản phẩm khi đặt hàng
        }
    ],
    totalAmount: { type: Number, required: true }, // Tổng số tiền cho đơn hàng
    shippingAddress: { type: String, maxLength: 255 }, // Địa chỉ giao hàng
    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered'],
        default: 'Pending', // Trạng thái mặc định là "Chờ xử lý"
    },
}, {
    timestamps: true
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
