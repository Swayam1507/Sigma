const mongoose = require("mongoose")
const { Schema } = mongoose;

const studentSchema = new Schema({
    name: { type: String, required: true },
    fatherNo: { type: String, required: true },
    motherNo: { type: String, required: true },
    selfNo: { type: String, required: true },
    standard: { type: Number, required: true },
    fees: { type: Number, required: true },
    created_at: { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model('Student', studentSchema);
