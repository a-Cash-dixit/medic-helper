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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
  },
});
const User = mongoose.model("history", UserSchema);

module.exports = History;
