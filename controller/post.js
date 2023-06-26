const Student = require("../models/student")
const Exam = require("../models/examschema")
const time = require("../models/timetable")


var val = Math.floor(1000 + Math.random() * 9000);

exports.Addstudent = async (req, res) => {
    const { name, phone, standard, fees } = req.body;
    try{
        const password = name + "@" + val;
        const userid = name + "@" + phone;
        const student = new Student({ name, phone, password , standard, fees });
        await student.save();
        res.status(201).json({ message: "Student added successfully"});
    }
    catch(err){
        res.status(400).json({message : err.message});
    }
};

exports.Getstudents = async (req,res)=>
{
    const students =await Student.find({std:req.body.std})
    if(students.length === 0)
    {
        res.status(404).json({'message':"No Students"});
    }
    else
    {
        res.status(200).json({students});
    }
};

exports.Addtimetable = async (req,res) =>
{
    const{subject,chapter,date,std,desc} = req.body;
    try{
        const timetabl = new time({ subject,chapter, date, std, desc});
        await timetabl.save();
        res.status(201).json({ message: "Student added successfully"})
    }
    catch(err)
    {
        res.status(400).json({message : err.message});
    }
};
exports.Addexam = async (req,res) =>
{
    const{date,subject,chapter,std,mark} = req.body;
    try{
        const exam = new Exam({date, subject, chapter, std, mark})
        await exam.save();
        res.status(201).json({message :"Exam Created"});
    }
    catch(err)
    {
        res.status(400).json({message :err.message});
    }
};
exports.Getexam = async(req,res) =>
{
    const exams =await Exam.find({std:req.body.std})
    if(exams.length === 0)
    {
        res.status(404).json({message:"No Students"});
    }
    else
    {
        res.status(200).json({exams});
    }
}



