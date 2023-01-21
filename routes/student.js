const express = require("express")
const router = express.Router()
const Student = require("../models/student")

router.post('/add-student', async (req, res) => {
    const { name, phone } = req.body;
    try{
        const password = name + "@" + phone.slice(-4);
        const student = new Student({ name, phone, password });
        await student.save();
        res.send({ message: 'Student added successfully' });
    }
    catch(err){
        res.send({ error: err })
    }
});

module.exports = router 