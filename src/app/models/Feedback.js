const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
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
    text: {
        type: String,
        maxLength: 1000,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
