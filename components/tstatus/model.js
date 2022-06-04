const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const mySchema = new Schema({
    status: String,
})

const model = mongoose.model('status', mySchema)
module.exports = model