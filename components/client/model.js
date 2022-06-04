const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: String,
    address: String,
    kam: String
})

const model = mongoose.model('client', mySchema)
module.exports = model