import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import User from '../models/userModel.js'
import ProfileModel from '../models/ProfileModel.js';

dotenv.config()
const SECRET = process.env.SECRET;
const HOST =  process.env.SMTP_HOST
const PORT =  process.env.SMTP_PORT
const USER =  process.env.SMTP_USER
const PASS =  process.env.SMTP_PASS

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

export const signup = async (req, res) => {
    const {email, password, confirmPassword, firstName, lastName, bio} = req.body
    try {
        const existingUser = await User.findOne({email})
        const userProfile = await ProfileModel.findOne({userId: existingUser?._id})
        if (existingUser) return res.status(400).json({message: "User already exist hui"})
        if (password !== confirmPassword) return res.status(400).json({message: "Password don't match"})
        const hashedPassword = await bcrypt.hash(password, 12)
        const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`, bio})
        const token = jwt.sign({email: result.email, id: result._id}, SECRET, {expiresIn: "1h"})
        res.status(200).json({result, userProfile, token})
    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
}

