
const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    name: String,
    price: String,
    type: String,
    restauratID: {type: mongoose.Types.ObjectId, ref: "Restaurant"}
});

const menu = mongoose.model("Menu", menuSchema);
module.exports = menu;
