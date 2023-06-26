const express = require("express");
const { addStandard } = require("../controller/standards");
const router = express.Router()

router.post('/add',addStandard)
 
module.exports = router;