const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');
const mongooseDelete = require('mongoose-delete');

mongoose.plugin(slug);

const messageSchema = new Schema({
    sender: { type: String, required: true }, // Người gửi (người mua hoặc người bán)
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const customOrderSchema = new Schema({
    bird: { type: String, required: true },
    price: { type: Number },
    spokes: { type: Number},
    email: { type: String, required: true },
    phone: { type: String, required: true },
    image: { type: String },
    material: [{ type: String, enum: ['Kim loại', 'Gỗ', 'Nhựa'], required: true }],
    status: {
        type: String,
        enum: ['Pending', 'Deposit','Processing', 'Shipped', 'Delivered', 'Canceled', 'Returned'],
        default: 'Pending'
    },
    shippingAddress: { type: String, maxLength: 255, required: true },
    description: { type: String, },
    messages: [messageSchema], // Mảng chứa các tin nhắn giữa người mua và người bán
}, {
    timestamps: true
});

customOrderSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });
customOrderSchema.plugin(mongoosePaginate);

const CustomOrder = mongoose.model('customOrders', customOrderSchema);

module.exports = CustomOrder;
