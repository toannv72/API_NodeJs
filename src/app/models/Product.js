const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');
const mongooseDelete = require('mongoose-delete');
mongoose.plugin(slug)
const product = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    reducedPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
    models: { type: String, default: '' },
    shape: { type: String, default: '' },
    material: [{ type: String, enum: ['Kim loại', 'Gỗ', 'Nhựa'] }],
    accessory: { type: String, default: '' },
    materialCode: { type: String, require: true },
    materialName: { type: String, require: true },
    sold: { type: Number, default: 0 },
    image: [{ type: String }],
    description: { type: String, default: '' },
    deletedAt: { type: String, maxLength: 255, default: null },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true
})
product.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });
product.plugin(mongoosePaginate);
module.exports = mongoose.model('products', product);

