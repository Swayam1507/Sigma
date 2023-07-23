const express = require("express");
const { addFee, getFees } = require("../controller/fees");
const router = express.Router()

router.post('/add',addFee)
router.post('/list',getFees)
 
module.exports = router;