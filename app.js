const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo.routes');
const dotenv = require('dotenv');
const connectDb = require('./config/db');

app.use(express.json());
app.use("/todos", todoRoutes);
app.use((error, req, res, next) => {
    res.status(500).json({message: error.message});
});

app.get('/', (req, res)=> {
    res.send("Hello World");
});

dotenv.config({path: './config/config.test.env'});
connectDb();

module.exports = app;