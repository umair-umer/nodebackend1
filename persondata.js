const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const perwonschema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true ,unique:true},
    designation: {
        type:String,
        enum: ["chef", "owner", "waiter"],
        require: true
    },
    username: { type: String, required: true },
    password: { type: String, required: true },

})

const Person = mongoose.model("Person", perwonschema);
module.exports = Person