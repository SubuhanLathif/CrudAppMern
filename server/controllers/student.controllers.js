
// const StudentsInfo = require('../models/student.models.js');
import mongoose from 'mongoose';
import StudentsInfo from '../models/student.models.js';
//CRUD Operation start


// C - Create
export const createNewStudent = async (req, res) => {
    try {
        const newStudent = new StudentsInfo(req.body);
        const savedDatas = await newStudent.save();
        res.status(201).json({
            data: savedDatas,
            msg: "Record Inserted Successfully"
        });
    }
    catch (e) {
        if (e.code === 11000) {
            // Duplicate key error
            const duplicateField = Object.keys(e.keyValue)[0]; // Gets the field that caused the issue
            res.status(400).json({
                msg: `${duplicateField} already exists!`,
                field: e.keyValue
            });
        } else {
            res.status(400).json({ msg: e.message });
        }
    }
};

// R - Read
export const getAllStudents = async(req,res) => {
try {
    const allStudents = await StudentsInfo.find();
    res.json(allStudents);
    // res.json({msg:'Hello World'});
} catch (e) {
    res.status(500).json({msg:e.message});
}
};

// U - Update
export const updateStudent = async(req,res) => {
    try {
        const id = req.params.id;
        // Validate ObjectId
        if(!mongoose.isValidObjectId(id)){
            return res.status(400).json({msd:'Invalid ID format!'});
        }

        // Mongoose Queries Model
        const updatedStudent  = await StudentsInfo.findByIdAndUpdate(id, req.body,{new : true});
        if(!updatedStudent ) {
            return res.status(404).json({msg:"Student not found!"});
        }

        res.status(200).json({
            data: updatedStudent,
            msg: "Record updated successfully!"
        });
    } catch (e) {
    res.status(400).json({msg: e.message });
    }
}

// D - Delete
export const deleteStudent = async (req,res) => {
try {
    await StudentsInfo.findByIdAndDelete(req.params.id);
    res.json({msg:'Record Deleted Successfully.'});
} catch (e) {
    res.status(500).json({msg: e.message});
    
}
}

