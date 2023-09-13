const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');
mongoose.plugin(slug)

const product = new Schema({
    name: { type: String ,required: true},
    price: { type: Number ,required: true},
    quantity: { type: Number ,required: true},
    detail: { type: String, default: '' },
    models: { type: String, default: '' },
    material: { type: String, default: '' },
    accessory: { type: String, default: '' },
    sold: { type: Number, default: 0 },
    image: [{ type: String }],
    description: { type: String, default: '' },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true
})
product.plugin(mongoosePaginate);
module.exports = mongoose.model('products', product);

