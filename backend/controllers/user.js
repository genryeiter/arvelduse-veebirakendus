import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import User from '../models/userModel.js'
import ProfileModel from '../models/ProfileModel.js';

dotenv.config()

export const signin = async (req, res) => {
    const {email, password} = req.body
    try {
        const existingUser = await User.findOne({email})
        const userProfile = await ProfileModel.findOne({userId: existingUser?._id})
        if (!existingUser) return res.status(404).json({message: "User doesn't exist"})
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if (!isPasswordCorrect) {
            return res.status(400).json({message: "Invalid credentials"})
        }
        res.status(200).json({result: existingUser, userProfile, token})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

