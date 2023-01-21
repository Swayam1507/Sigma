const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect('mongodb://localhost:27017/coachingInstitution', { useNewUrlParser: true });

app.use('/student',require('./routes/student'))

app.listen(3000, () => {
    console.log('Server started on port 3000');
});