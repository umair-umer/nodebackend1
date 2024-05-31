// console.log("server is running");
// function add(a,b){
//     return a+b;

// }
//  const result=add(2,8);
//  console.log(result);
// var fs=require('fs');
// var os=require('os');

// let user=os.userInfo();
// console.log(user);
// fs.appendFile('greeting.txt','hi'+user.username +'! \n',()=>{console.log("file is created");})
// const jsonstrin='{"name":"umair","age":"23","hobies":"boxing"}'
// const jsonObj=JSON.parse(jsonstrin)
// console.log(jsonObj.age);
// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const jsonObject = JSON.parse(jsonString); // Convert JSON string to object
// console.log(jsonObject.name); // Output: John

// const objectToConvert = { name: "Alice", age: 25 };
// const jsonStringified = JSON.stringify(objectToConvert); // Convert object to JSON string
// console.log(jsonStringified); // Output: {"name": "Alice", "age":25}
const express = require('express')

const app = express()
const connectDB = require("./db")
const bodyParser = require('body-parser');
const perSonRouter=require('./routes/personroutes');
const menueItem = require('./routes/menudata')
const passport = require('./auth');
// const Person = require('./persondata')
app.use(bodyParser.json());
app.use(passport.initialize());
connectDB();




const logReqest=(req,res,next)=>{
  console.log(`${new Date().toLocaleString()} reqest mate to ${req.orignalUrl}`);
  next();
}
const MIddlewWareAuth=passport.authenticate('local', {session:false})

app.get('/', function (req, res) {
  res.send('Hello World')
})




require('dotenv').config();
app.use("/person", perSonRouter)
app.use("/menu",MIddlewWareAuth, menueItem)
const Port = process.env.PORT ||3000;
app.listen(Port, () => {
  console.log(`Server running on http://localhost:${Port}`);
})