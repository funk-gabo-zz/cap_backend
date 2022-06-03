const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  client: String,
  date: Date,
  platform: String,
  time: Number,
  mode: String,
  assistance: Number,
  serviceType: String,
  contactEmail: String,
  contactName: String,
  contactPhone: String,
  status: String,
  tkt: String,
  observations: String,
});

const model = mongoose.model("training", mySchema);
module.exports = model;
