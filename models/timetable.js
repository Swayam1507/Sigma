const mongoose = require("mongoose")
const { Schema } = mongoose;

const TimetableSchema = new Schema({
    subject: { type: String, required: true },
    chapter: { type: String, required: true },
    date: { type: String, required: true },
    std: {type :String, required:true},
    desc: {type:String}
});
module.exports = mongoose.model('time', TimetableSchema);