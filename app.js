const express = require('express');
const errorRoute = require('./utils/errorRoute');
const logger = require('./utils/logger');
const authRouter = require('./routes/authRouter');
const cookieParser = require('cookie-parser');
const cors = require('cors');


const app = express();
app.use(cors({
  origin: ['http://localhost:5173', 'https://task12be.onrender.com', 'https://passwordreset-bysaairam.netlify.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));



app.use(express.json());

app.use(cookieParser());

app.use(logger);

app.use("/api/v1/auth", authRouter);


app.use(errorRoute);

module.exports = app;