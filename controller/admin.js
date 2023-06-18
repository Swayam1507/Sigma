const Admin = require('../models/admin')
const bcrypt = require('bcrypt')
const login = async (req,res) => {
    const {name, password} = req.body;
    const response = await Admin.findOne({name});
    if(!response){
        return res.status(404).send({
            msg: "User not found."
        })
    }
    const bool = await bcrypt.compare(password, response.password)
    if(bool){
        return res.status(200).send({
            msg: "Login successful.",
        })
    } else{
        return res.status(401).send({
            msg: "User unauthorized.",
        })
    }
}
module.exports = {
    login
}