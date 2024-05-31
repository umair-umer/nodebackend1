const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const perwonschema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true ,unique:true},
    age: { type: Number, required: true },
    designation: {
        type:String,
        enum: ["chef", "owner", "waiter"],
        require: true
    },
   

})

const Person = mongoose.model("Person", perwonschema);
module.exports = Person