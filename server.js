const express = require('express');
const connectDB = require('./db');
require('dotenv').config();

//SET UP MONGODB
connectDB();

//EXPRESS
const app = express();

app.use('/user', require('./routes/user'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})