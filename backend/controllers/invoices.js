import InvoiceModel from '../models/InvoiceModel.js'

export const getInvoicesByUser = async (req, res) => {
    const {searchQuery} = req.query;
    try {
        const invoices = await InvoiceModel.find({creator: searchQuery});
        res.status(200).json({data: invoices});
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getTotalCount = async (req, res) => {
    const {searchQuery} = req.query;
    try {
        const totalCount = await InvoiceModel.countDocuments({creator: searchQuery});
        res.status(200).json(totalCount);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getInvoice = async (req, res) => {
    const {id} = req.params;
    try {
        const invoice = await InvoiceModel.findById(id);
        res.status(200).json(invoice);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}