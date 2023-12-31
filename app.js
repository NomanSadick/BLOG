// Basic Lib Import
const express =require('express');
const router =require('./src/route/api');
const app= new express();
const bodyParser =require('body-parser');
const path = require('path');


// Security Middleware Lib Import
const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');
const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');

// Database Lib Import
const mongoose =require('mongoose');


// Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

// Body Parser Implement
app.use(bodyParser.json())

// Request Rate Limit
const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)


// Mongo DB Database Connection old version
// let URI="mongodb+srv://<username>:<password>@cluster0.rbbqn.mongodb.net/CRUD?retryWrites=true&w=majority";
// let OPTION={user:'testuser111',pass:'testuser111', autoIndex:true}
// mongoose.connect(URI,OPTION,(error)=>{
//     console.log("Connection Success")
//     console.log(error)
// })


async function connectToDatabase() {
    const URI = "mongodb+srv://<username>:<password>@cluster0.rbbqn.mongodb.net/CRUD?retryWrites=true&w=majority";
    const OPTIONS = { user: 'testuser111', pass: 'testuser111', autoIndex: true };
  
    try {
      await mongoose.connect(URI, OPTIONS);
      console.log("Connection Success");
    } catch (error) {
      console.error("Connection Error:", error);
    }
  }
  
  connectToDatabase();
  
  
  
  
  
  

app.use(express.static('client/dist'));
app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html')); // Use res.sendFile instead of req.sendFile
});


// Routing Implement
app.use("/api/v1",router)


module.exports=app;