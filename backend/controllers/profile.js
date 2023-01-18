import mongoose from 'mongoose';
import ProfileModel from '../models/ProfileModel.js';

export const getProfile = async (req, res) => {
    const {id} = req.params;
    try {
        const profile = await ProfileModel.findById(id);
        res.status(200).json(profile);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getProfilesByUser = async (req, res) => {
    const {searchQuery} = req.query;
    try {
        const profile = await ProfileModel.findOne({userId: searchQuery});
        res.json({data: profile});
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getProfilesBySearch = async (req, res) => {
    const {searchQuery} = req.query;
    try {
        const name = new RegExp(searchQuery, "i");
        const email = new RegExp(searchQuery, "i");
        const profiles = await ProfileModel.find({$or: [{name}, {email}]});
        res.json({data: profiles});
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const updateProfile = async (req, res) => {
    const {id: _id} = req.params
    const profile = req.body
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No client with that id')
    const updatedProfile = await ProfileModel.findByIdAndUpdate(_id, {...profile, _id}, {new: true})
    res.json(updatedProfile)
}

export const deleteProfile = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No profile with id: ${id}`);
    await ProfileModel.findByIdAndRemove(id);
    res.json({message: "Profile deleted successfully."});
}