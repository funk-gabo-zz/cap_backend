const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: String,
})

const model = mongoose.model('cliente', mySchema)
module.exports = model