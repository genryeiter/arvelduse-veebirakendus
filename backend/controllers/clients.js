import ClientModel from '../models/ClientModel.js'

export const getClient = async (req, res) => {
    const {id} = req.params;
    try {
        const client = await ClientModel.findById(id);
        res.status(200).json(client);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getClients = async (req, res) => {
    const {page} = req.query;
    try {
        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT;
        const total = await ClientModel.countDocuments({});
        const clients = await ClientModel.find().sort({_id: -1}).limit(LIMIT).skip(startIndex);
        res.json({data: clients, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

