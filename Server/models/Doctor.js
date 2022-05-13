const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  DocId: {
    type: Number,
    required: true,
    unique: true,
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
  date: {
    type: Date,
    default: Date.now,
  },
  experience: {
    type: Number,
    default: 0,
  },
  speciality: {
    type: String,
    required: true,
  },
  Language: {
    type: Array,
    required: false,
    default: ["english"],
  },
  address: {
    type: String,
    required: false,
  },
  timing: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "very genius doctor of out hospital.",
  },
  services: {
    type: String,
    required: false,
  },
  awards: {
    type: String,
    required: false,
  },
  membership: {
    type: String,
    required: false,
  },
  interest: {
    type: String,
    required: false,
  },
  // experience, speciality, language, address,
  // timing(avalilabe houres) , description (thodi si tareef)
  // services and awards, membership and interest
});
const User = mongoose.model("doctor", UserSchema);

module.exports = Doctor;
