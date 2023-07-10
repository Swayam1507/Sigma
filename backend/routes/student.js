const express = require("express")
const router = express.Router()
const{Addstudent,Getstudents,Addtimetable,Addexam,Getexam,deleteStudent,editStudent} = require("../controller/student")

router.post('/add',Addstudent)
router.post('/list',Getstudents)
router.delete('/delete/:id',deleteStudent)
router.put('/edit/:id',editStudent)
router.post('/add-timetable',Addtimetable)
router.post('/add-exam',Addexam)
router.get('/get-exam',Getexam)

module.exports = router;