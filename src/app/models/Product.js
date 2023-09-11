const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');
mongoose.plugin(slug)

const product = new Schema({
    // image: { type: String, maxLength: 255, default: '' },
    // name: { type: String, maxLength: 255 },
    // year: { type: Number },
    // nation: { type: String },
    // description: { type: String },
    // video: { type: String, maxLength: 650 },
    // slug: { type: String, slug: 'name', unique: true },

    name: { type: String },
    price: { type: Number },
    quantity: { type: Number },
    detail: { type: String, default: '' },
    models: { type: String, default: '' },
    material: { type: String, default: '' },
    accessory: { type: String, default: '' },
    sold: { type: Number },
    image: [{ type: String }],
    Describe: { type: String, default: '' },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true
})
product.plugin(mongoosePaginate);
module.exports = mongoose.model('products', product);

