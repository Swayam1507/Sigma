const Fees = require("../models/fees");

const addFee = async (req,res) => {
    const { amount, student, mode } = req.body;
    try {
        const response = await Fees.create({ amount, student, mode })
        if(response){
            res.status(200).send({
                success: true,
                msg: 'Fees created successfully.'
            })
        }
    } catch (error) {
        return res.status(400).send({
            success: false,
            msg: error.message
        })
    }
}
const getFees = async (req,res) => {
    try {
        const { studentId } = req.body;
        const result = await Fees.find({student: studentId }).sort({ 'updatedAt': -1 })
        return res.status(200).send({
            success: true,
            list: result,
            count: result?.length
        })
    } catch(error) {
        return res.status(400).send({
            success: false,
            msg: error.message
        })
    }
}
module.exports = {
    addFee,
    getFees
}