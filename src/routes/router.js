import express from 'express';
import { Insert } from '../controllers/controller.js';

const api = express.Router();
export default api;

api.get('/stores', (req, res) => {
    const testResponse = {
        storeName: ['Sample Store 1','Sample Store 2'],
        storeID: [1,2]
    }
    res.status(200).json(testResponse);
});

api.post('/insert', async (req, res) => {
    if (!req.body || Object.keys(req.body).length == 0) {
        res.status(400).json({
            error: true,
            message: 'No body in request'
        });
        return;
    }
    //const data = await Insert();
    const testResponse = {
        success: true,
        message: 'Successful test fetch',
        body: req.body
    };
    res.status(200).json(testResponse);
});
