const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const app = express();
dotenv.config();


//connection establish with mongoatlas
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
   // useCreateIndex: true,
   // useFindAndModify: false,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("mongoose connected...");
});
mongoose.connection.on('error', err=>{
    console.log('db connection error: ${err.getmessage}');
});

app.use(express.json());

app.use('/student',require('./routes/student'))

const port=process.env.PORT; 

app.listen(port, () => {
    console.log('Server started on port 3000');
});