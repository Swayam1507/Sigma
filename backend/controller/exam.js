const Exam = require("../models/examschema")
const Addexam = async (req,res) => {
    const{ date, subject, chapter, standard, mark } = req.body;
    try{
        const exam = new Exam({date, subject, chapter, standard, mark})
        await exam.save();
        res.status(201).json({success: true, message :"Exam created successfully"});
    }
    catch(err)
    {
        res.status(400).json({success: false, message :err.message});
    }
};
const Getexam = async(req,res) => {
    try{
        const exams =await Exam.find()
        res.status(200).json({success: true, list: exams, count: exams?.length});
    } catch(err){
        res.status(400).json({success: false, message :err.message});
    }
}
const deleteExam = async (req,res) => {
    const { id } = req.params;
    try {
        await Exam.findByIdAndDelete(id)
        return res.status(200).send({
            success: true,
            msg: 'Exam deleted successfully.'
        })
    } catch(error){
        return res.status(400).send({
            success: false,
            msg: error.message
        })
    }
}
const editExam = async (req,res) => {
    const { id } = req.params;
    const { date, subject, chapter, standard, mark } = req.body;
    try {
        await Exam.findByIdAndUpdate(id, {
            date, subject, chapter, standard, mark
        })
        return res.status(200).send({
            success: true,
            msg: 'Exam updated successfully.'
        })
    } catch(error){
        return res.status(400).send({
            success: false,
            msg: error.message
        })
    }
}
module.exports = {
    Addexam,
    Getexam,
    deleteExam,
    editExam
}