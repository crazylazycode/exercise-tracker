const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const exerciseRouter = require("./routes/exercise");
const userRouter = require("./routes/user");

require("dotenv").config();

const app = express();
const port  = process.env.PORT || 5000;

// mongoBD Connection
const uri = process.env.MONGO_URI;
mongoose.connect(uri,{ useNewUrlParser: true , useUnifiedTopology: true ,useCreateIndex:true } )

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB was successfully connected')
})
connection.on('error',err => {
    console.log(`Error in connection : ${err.message}`)
})

// using middleware
app.use(cors());
app.use(express.json());
app.use('/exercises', exerciseRouter);
app.use("/users", userRouter);

//server listening on port 5000
app.listen(port,() => {
    console.log(`Server is running on port : ${port}`);
})