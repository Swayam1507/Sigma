const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/coachingInstitution', { useNewUrlParser: true });

app.use('/student',require('./routes/student'))
app.use('/admin',require('./routes/admin'))
app.use('/fees',require('./routes/fees'))

app.listen(3000, () => {
    console.log('Server started on port 3000');
});