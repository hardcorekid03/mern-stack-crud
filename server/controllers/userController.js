const User = require ('../models/userModel')
const jwt = require ('jsonwebtoken')


const createToken = (_id) =>{
const secretKey = process.env.SECRET;

return jwt.sign({_id,}, secretKey, {expiresIn: "3h"})
}

// login user
const loginUser = async (req, res) => {
    const {email, password} = req.body
    
    try {
        const user = await User.login(email,password)
        // create token 
        const token = createToken(user._id)
        res.status(200).json({email, token})

    } catch (error){
        res.status(400).json ({error: error.message})
    }

}

// signup user
const signupUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.signup(email,password)
        // create token 
        const token = createToken(user._id)
        res.status(200).json({email, token})

    } catch (error){
        res.status(400).json ({error: error.message})
    }
}

module.exports = {signupUser, loginUser}