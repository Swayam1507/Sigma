const express = require("express");
const { addStandard, getStandards, editStandard, deleteStandard } = require("../controller/standards");
const router = express.Router()

router.post('/add',addStandard)
router.get('/list',getStandards)
router.put('/edit/:id',editStandard)
router.delete('/delete/:id',deleteStandard)
 
module.exports = router;