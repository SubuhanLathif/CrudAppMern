// const express = require('express');
import express from 'express';
// const StudentsInfo = require('../models/user');
import { createNewStudent, getAllStudents, updateStudent, deleteStudent } from '../controllers/student.controllers.js';

const router = express.Router();

// post new records
router.post('/add', createNewStudent);

// fetch all records
router.get('/', getAllStudents);

// get & update records by its id
router.put('/update/:id',updateStudent);

// delete records by its id
router.delete('/delete/:id',deleteStudent);

export default router;