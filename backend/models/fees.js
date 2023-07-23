const mongoose = require("mongoose")
const { Schema } = mongoose;

const FeesSchema = new Schema({
    amount:{ type: Number, required: true },
    student: { type: mongoose.Types.ObjectId, required: true, ref: 'Student' },
    mode: { type: String, required: true }
});

module.exports = mongoose.model('Fees', FeesSchema);
