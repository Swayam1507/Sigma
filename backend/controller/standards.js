const standards = require("../models/standards");


const addStandard = async (req,res) => {
    const { name, fees } = req.body;
    try {
        const foundOne = await standards.findOne({name})
        if(foundOne){
            return res.status(409).send({
                success: false,
                msg: 'Standard with this name already exists.'
            })
        }
        const response = await standards.create({name, fees})
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
const getStandards = async (req,res) => {
    try {
        const result = await standards.find({}).sort({ 'updatedAt': -1 })
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
const editStandard = async (req,res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        await standards.findByIdAndUpdate(id, {
            name: name
        })
        return res.status(200).send({
            success: true,
            msg: 'Standard updated successfully.'
        })
    } catch(error){
        return res.status(400).send({
            success: false,
            msg: error.message
        })
    }
}
const deleteStandard = async (req,res) => {
    const { id } = req.params;
    try {
        await standards.findByIdAndDelete(id)
        return res.status(200).send({
            success: true,
            msg: 'Standard deleted successfully.'
        })
    } catch(error){
        return res.status(400).send({
            success: false,
            msg: error.message
        })
    }
}

module.exports = {
    addStandard,
    getStandards,
    editStandard,
    deleteStandard
}