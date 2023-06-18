const Admin = require('../models/admin')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET;

const login = async (req,res) => {
    const {name, password} = req.body;
    try{
        if(!name || !password){
            let msg="";
            if(!name){
                msg = "Name is required."
            } else if(!password){
                msg = "Password is required."
            } else{
                msg = "All fields are required."
            }
            return res.status(400).send({
                success:false,
                msg: msg
            })
        }
        const response = await Admin.findOne({name});
        if(!response){
            return res.status(404).send({
                success: false,
                msg: "User not found."
            })
        }
        const bool = await bcrypt.compare(password, response.password)
        if(bool){
            const token = jwt.sign(req.body, JWT_SECRET);
            return res.status(200).send({
                success: true,
                msg: "Login successful.",
                token: token,
            })
        } else{
            return res.status(401).send({
                success: false,
                msg: "User unauthorized.",
            })
        }
    } catch(err) {
        return res.status(400).send({
            success: false,
            msg: err.message
        })
    }
}
module.exports = {
    login
}