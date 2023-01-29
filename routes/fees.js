const express = require("express")
const router = express.Router()
const Student = require("../models/student")

router.post('/update', async (req, res) => {
    const { id, updatedFees } = req.body;
    try{
        const student = await Student.findByIdAndUpdate(id,{
            fees: updatedFees
        },{ new: true });
        return res.send({ success: student})
    }
    catch(err){
        res.send({ error: err })
    }
});

module.exports = router 