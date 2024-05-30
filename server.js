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
const perSonRouter=require('./routes/personroutes')
app.use(bodyParser.json());
connectDB();

app.get('/', function (req, res) {
  res.send('Hello World')
})


// app.get('/me', function (req, res) {
//     res.send('Hello World me')
//   })
//   app.get('/info', function (req, res) {
//     const inf={
//         name:"umair",
//         age:28,
//         status:"married"
//     }
//     res.send(inf)
//   })
require('dotenv').config();
app.use("/person",perSonRouter)
const Port = process.env.PORT
app.listen(Port, () => {
  console.log("port is  runing", Port);
})