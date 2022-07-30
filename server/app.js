const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


const app = express();

dotenv.config({path: './config.env'});
require('./db/conn');
// const Food = require('./model/userSchema');
const PORT = process.env.PORT;

app.use(express.json());
app.use(require('./router/auth'));
// app.use(require('./router/upload'));



// middleware

const middleware = (req, res, next) => {
    console.log("hello swiggy middleware")
    next();
}


app.get('/', (req, res) => {
    res.send('hello new swiggy')
})
app.get('/about', middleware, (req, res) => {
    res.send('hello new swiggy about page')
    
})

app.listen(PORT, (err) => {
    console.log(`server is running on port ${PORT}`)
})