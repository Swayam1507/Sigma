const mongoose = require("mongoose")
const { Schema } = mongoose;

const studentSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    std: {type :String, required:true},
    userid: {type:String,required :true}
});

module.exports = mongoose.model('Student', studentSchema);
