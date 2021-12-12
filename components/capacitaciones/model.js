const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const mySchema = new Schema({
    user: String,
    client: String,
    platform: String
})

const model = mongoose.model('cap', mySchema)
module.exports = model