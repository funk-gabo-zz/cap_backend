const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const mySchema = new Schema({
    service: String,
})

const model = mongoose.model('service', mySchema)
module.exports = model