const StudentModel = require("../models/student.model");
// const Student = require("../models/student.model");

exports.getStudentList = (req, res)=>{
    console.log("All Students");
    StudentModel.getallStudents((err, students)=>{
        console.log("We are here");
        if(err)
        res,send(err);
        console.log("Students",students);
        res.send(students);
    })
}

exports.getStudentByID = (req, res)=>{
    // console.log("Get student by id");
    StudentModel.getStudentByID(req.params.id,(err, student)=>{
        if(err)
        res,send(err);
        console.log("Single student data",student);
        res.send(student);
    })
}

//Create new Student
exports.createNewStudent = (req, res)=>{
    // console.log("Create new Stud");
    const studentRequestData = new StudentModel(req.body);
    console.log("studentRequestData",studentRequestData);
    if(req.body.constructor === Object&& Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: "Please fill in all fields"});
    } else{
        // console.log("Valid Data");
        StudentModel.createStudent(studentRequestData, (err, student)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: "Student created successfully", data: student});    
        })
    }
}

//Update Student
exports.updateStudent=(req, res)=>{
    const studentRequestData = new StudentModel(req.body);
    console.log("studentRequestData update",studentRequestData);
    if(req.body.constructor === Object&& Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: "Please fill in all fields"});
    } else{
        // console.log("Valid Data");
        StudentModel.updateStudent(req.params.id, studentRequestData, (err, student)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: "Student updated successfully"});
        })
    }   
}

//Delete Student
exports.deleteStudent = (req, res)=>{
    StudentModel.deleteStudent (req.params.id, (err, student)=>{
        if(err)
        res.send(err);
        res.json({success: true, message: "Student deleted successfully"});
    })
}