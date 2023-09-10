
const mongoose = require('mongoose');
async function Connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/chim');
        console.log("ok!");
    } catch (error) {
        console.log("error!");
    }
}


module.exports = { Connect }