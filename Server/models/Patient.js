const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  PatientId: {
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
  gender: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  blood_group: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  basic_history: {
    type: String,
    required: false,
  },
  isdoc: {
    type: Boolean,
    required: true,
  },

  //gender, blood group , age , allergies, basic history (like dibetic or not)
  //
});
const Patient = mongoose.model("patient", PatientSchema);

module.exports = Patient;
