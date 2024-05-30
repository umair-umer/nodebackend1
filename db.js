const mongoose = require('mongoose')
require('dotenv').config();
// const MONGO_URI="mongodb://localhost:27017/mydatabase"
const MONGO_URI=process.env.MONGO_URI;
const connectDB = async () => {
    try {
      await mongoose.connect(MONGO_URI);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1); // Exit process with failure
    }
  };
// mongoose.connect(MONGO_URI,{
//     // useNewURlParse:true,
//     // useUnifiedTopology:true
// })
// const db= mongoose.connection;
// db.on("connected",()=>{
//     console.log("conected database");
// })
// db.on("error",(err)=>{
//     console.log("conected database");
// })
// db.on("disconnected",()=>{
//     console.log("disconnected database");
// })
module.exports=connectDB;
// exports.connect = () => {
//     mongoose.connect(process.env.MONGO_URI).then(()=>{
//         console.log("MongoDB Connected Successfully")
//     }).catch((err)=>{
//         console.log(err);
//         console.error("Error Connecting to MongoDB Database")
//     })
// }