const express = require("express")
const router = express.Router()
// const{Addstudent,Getstudents,Addtimetable,Addexam,Getexam,deleteStudent,editStudent} = require("../controller/student")
const { Addexam, Getexam, deleteExam, editExam } = require('../controller/exam')


router.post('/add',Addexam)
router.get('/list',Getexam)
router.put('/edit/:id',editExam)
router.delete('/delete/:id',deleteExam)

module.exports = router;