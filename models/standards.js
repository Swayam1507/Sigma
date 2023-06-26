const mongoose = require("mongoose")
const { Schema } = mongoose;

const standardsSchema = new Schema({
    name: { type: String, unique: true, required: true, minLength: 2, maxLength: 20 }
});


module.exports = mongoose.model('Standards', standardsSchema);
