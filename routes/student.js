const express = require("express")
const router = express.Router()
const{Addstudent,Getstudents,Addtimetable,Addexam,Getexam} = require("../controller/post")

router.post('/add-student',Addstudent)
router.get('/get-student',Getstudents)
router.post('/add-timetable',Addtimetable)
router.post('/add-exam',Addexam)
router.get('/get-exam',Getexam)

module.exports = router;