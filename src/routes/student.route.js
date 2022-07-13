const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const studentController = require("../controllers/student.controller");

//Get all students
// router.get('/',studentController.getStudentList);
router.get('/',studentController.getStudentList);

//Get student by ID
router.get('/:id',studentController.getStudentByID);

//Create new Student
router.post('/', studentController.createNewStudent);

//Update Student
router.put('/:id',studentController.updateStudent);

//Delete student
router.delete('/:id',studentController.deleteStudent);
module.exports = router;