const express = require("express")
const router = express.Router()
const Admin = require("../models/admin")

router.post('/login', async (req, res) => {
    const { name, password } = req.body;
    try{
        const admin = await Admin.findOne({ name, password });
        if(!admin){
            return res.send({ error: 'Admin not found.' });
        }
        return res.send({ success: admin})
    }
    catch(err){
        res.send({ error: err })
    }
});

module.exports = router 