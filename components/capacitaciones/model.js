const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const user = new Schema({
  name: String,
  lastName: String,
  email: String,
  phone: String,
});

const mySchema = new Schema({
  kam: String,
  user: [user],
  client: String,
  platform: String,
  online: Boolean,
  address: String,
  date: Date,
});

const model = mongoose.model("cap", mySchema);
module.exports = model;
