

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const designSchema = new Schema({
  user: { type: String, required: true },
  email: { type: String, required: true },
  fontStyle: String,
  color: String
});

const Design = mongoose.model("Design", designSchema);

module.exports = Design;