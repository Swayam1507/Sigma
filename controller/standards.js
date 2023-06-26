const standards = require("../models/standards");


const addStandard = async (req,res) => {
    const { name } = req.body;
    try {
        const foundOne = await standards.findOne({name})
        if(foundOne){
            return res.status(409).send({
                success: false,
                msg: 'Standard with this name already exists.'
            })
        }
        const response = await standards.create({name})
        if(response){
            res.status(200).send({
                success: true,
                msg: 'Standard created successfully.'
            })
        }
    } catch (error) {
        return res.status(400).send({
            success: false,
            msg: error.message
        })
    }
}
module.exports = {
    addStandard
}