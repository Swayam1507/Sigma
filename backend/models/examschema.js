const mongoose = require("mongoose")
const { Schema } = mongoose;

const ExamSchema = new Schema({
    date: { type: String, required: true },
    subject:{ type: String, required: true },
    chapter:{ type:String, required: true },
    standard: { type: mongoose.Types.ObjectId, required: true, ref: 'Standards', index: true },
    mark: { type:String,required:true}
});

module.exports = mongoose.model('Exam', ExamSchema);
