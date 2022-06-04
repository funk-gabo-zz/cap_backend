const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const mySchema = new Schema({
    mode: String,
})

const model = mongoose.model('mode', mySchema)
module.exports = model