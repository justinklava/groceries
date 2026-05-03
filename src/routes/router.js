import express from 'express';
import { Insert } from '../controllers/controller.js';

const api = express.Router();
export default api;

api.post('/insert', (req, res) => {
    if (!req.body || Object.keys(req.body).length == 0) {
        res.status(400).json({
            error: true,
            message: 'No body in request'
        });
        return;
    }
    const test_response = {
        success: true
    };
    res.status(200).json('test');
});
