
const mongoose = require("mongoose");


const UsersSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model("Users", UsersSchema);