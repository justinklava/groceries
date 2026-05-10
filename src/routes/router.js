import express from 'express';
import { postInsert, getStores } from '../controllers/controller.js';

const api = express.Router();
export default api;

api.get('/stores', await getStores);

api.post('/insert', await postInsert);
