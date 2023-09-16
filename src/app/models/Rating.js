const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', // Tham chiếu đến schema người dùng
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products', // Tham chiếu đến schema sản phẩm
        required: true,
    },
    value: { //là giá trị đánh giá từ 1 đến 5.
        type: Number,
        min: 1,
        max: 5,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Rating = mongoose.model('rating', ratingSchema);

module.exports = Rating;
