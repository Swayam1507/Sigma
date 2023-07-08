const mongoose = require("mongoose")
const { Schema } = mongoose;

const studentSchema = new Schema({
    name: { type: String, required: true },
    fatherNo: { type: Number, required: true },
    otherNo: { type: Number },
    standard: { type: mongoose.Types.ObjectId, required: true, ref: 'Standards', index: true },
    fees: { type: Number, required: true }
},
    {timestamps: true}
);

module.exports = mongoose.model('Student', studentSchema);
