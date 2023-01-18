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