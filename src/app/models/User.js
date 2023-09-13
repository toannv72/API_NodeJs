const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema;
mongoose.plugin(slug)

const User = new Schema({
    username: { type: String, maxLength: 255, unique: true },
    password: { type: String, maxLength: 255 },
    phone: { type: String, maxLength: 255 },
    address: { type: String, maxLength: 255, default: '' },
    name: { type: String, maxLength: 255, default: '' },
    avatar: { type: String, maxLength: 255, default: '' },
    admin: { type: Boolean, default: false }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('user', User);

