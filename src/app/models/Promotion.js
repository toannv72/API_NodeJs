const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength: 255,
        required: true,
    },
    description: {
        type: String,
        maxLength: 1000,
    },
    discountType: {
        type: String,
        enum: ['Percentage', 'Amount'],
        required: true,
    },
    discountValue: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Promotion = mongoose.model('Promotion', promotionSchema);

module.exports = Promotion;
