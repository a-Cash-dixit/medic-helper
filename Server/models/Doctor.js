const mongoose = require("mongoose");
const { Schema } = mongoose;

const DocSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  DocId: {
    type: Number,
    required: true,
    unique: true,
  },
  imageurl: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    unique: false,
    required: false,
  },
  password: {
    type: String,
    default: "General",
  },
  experience: {
    type: Number,
    default: 0,
  },
  speciality: {
    type: String,
    required: true,
  },
  timing: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "very genius doctor of out hospital.",
  },
  awards: {
    type: String,
    required: false,
  },
  membership: {
    type: String,
    required: false,
  },
});
const Doctor = mongoose.model("doctor", DocSchema);

module.exports = Doctor;
