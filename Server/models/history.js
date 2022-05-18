const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  problem: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: false,
  },
  treatment: {
    type: String,
    required: false,
  },
  medicines_given: {
    type: Array,
    required: false,
  },
});
const User = mongoose.model("history", UserSchema);

module.exports = History;
