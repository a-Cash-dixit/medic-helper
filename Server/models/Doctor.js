const mongoose = require("mongoose");
const { Schema } = mongoose;
<<<<<<< Updated upstream
const DoctorSchema = new Schema({
=======
const DocSchema = new Schema({
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
const User = mongoose.model("doctor", DoctorSchema);
=======
const Doctor = mongoose.model("doctor", DocSchema);
>>>>>>> Stashed changes

module.exports = Doctor;
