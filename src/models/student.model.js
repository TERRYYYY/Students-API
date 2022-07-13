var dbConnect = require("../../config/db.config");

var Student = function(student) {
    this.id = student.id;
    this.name = student.name;
    this.email = student.email;
    this.email = student.gender;
    this.email = student.status;
}

//Get all students
Student.getallStudents = (result) =>{
    dbConnect.query("SELECT * FROM foreigners",(err,res)=>{
        if(err){
            console.log("Error while fetching students", err);
            result(null,err);
        }
        else{
            console.log("Students fetched succesfully");
            result(null,res);
        }
    })
}

//Get by ID
Student.getStudentByID = (id, result)=>{
    dbConnect.query("SELECT * FROM foreigners WHERE id=?", id,(err,res)=>{
        if(err){
            console.log('Error while fetching student by id',err);
            result(null,err);
        }else{
            result(null,res);
        }
    })
}

//Create new Student
Student.createStudent = (studentRequestData, result)=>{
    dbConnect.query("INSERT INTO foreigners SET ?", studentRequestData, (err,res)=>{
        if(err){
            console.log("Error while inserting data");
            result(null,err);
        }else{
            console.log("Student created successfully");
            result(null,res)

            // result(null,{status: true, message: "Student created successfully", inserted: res.id})
        }
    })
}

//Update Student
Student.updateStudent = (id,studentRequestData,result)=>{
    dbConnect.query("UPDATE foreigners SET name=?, email=? gender=? status=? WHERE id=?", [studentRequestData.name, studentRequestData.email, studentRequestData.gender, studentRequestData.status, id],(err,res)=>{
        if(err){
            console.log("Error when updating student");
            result(null,err);
        }else{
            console.log("Student updated successfully");
            result(null,res);
        }
    })

}
//Delete Student
Student.deleteStudent=(id, result)=>{
    dbConnect.query("DELETE FROM foreigners WHERE id=?",[id],(err,res)=>{
        if(err){
            console.log("Error while deleting student");
            result(null,err);
        }else{
            result(null,res);
        }
    })
}
module.exports = Student;