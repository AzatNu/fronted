const mongoose = require("mongoose");

const AppealsSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  number: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, default: Date.now },
});

module.exports = mongoose.model("Appeals", AppealsSchema);
