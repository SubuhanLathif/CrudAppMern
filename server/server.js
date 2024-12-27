// const express = require('express');
import express from 'express';
// const mongoose = require('mongoose');
import mongoose from 'mongoose';
// const studentRoutes = require('./routes/student.routes');
import studentRoutes from './routes/student.routes.js';
// const cors  = require('cors');
import cors from 'cors';
// require('dotenv').config();
import { configDotenv } from 'dotenv';
configDotenv();

// initialize express
const app = express();

// enable cors
app.use(cors());

// middleware
app.use(express.json());

// routes
app.use('/user',studentRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));
  
// app.get('/',(req,res) => {
//     res.json({msg:'Hello Worlds',})
// })

const PORT = process.env.PORT || 8081;

try {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
} catch (error) {
    console.error('Error starting the server:', error);
}