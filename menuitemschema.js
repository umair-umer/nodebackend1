const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MeueItem = new Schema({
  dishName: {
    type: String,
  },
  taste: {
    type: String,
  },
  dishetype: {
    type:String,
    enum: ["tika", "karai", "chines"],
    require: true
  },
});

const Menue = mongoose.model("Menue", MeueItem);
module.exports = Menue;
