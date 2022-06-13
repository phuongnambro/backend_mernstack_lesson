const express = require('express');

const app = express(); 

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

require('dotenv/config');

// import rpute


const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute);

// Middlewar


// Route

app.get('/', (req, res) => {
    res.send('ketamin')
})

app.get('/posts', (req, res) => {
    res.send('posts')
})


mongoose.connect( process.env.MONGODB_URL , () =>{
    console.log("connected to db");
})

app.listen(4567)