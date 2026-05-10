import path from 'path';
import {fileURLToPath} from 'url';

import dbq from '../config/db.js';

export { postInsert, getStores };

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

async function postInsert(req, res) {
    if (!req.body || Object.keys(req.body).length == 0) {
        res.status(400).json({
            error: true,
            message: 'No body in request'
        });
        return;
    }

    // get values from form object and process
    // call Insert functions with processed values
    
    const testResponse = {
        success: true,
        message: 'Successful test fetch',
        body: req.body
    };
    res.status(200).json(testResponse);
}

async function insertReceipt(receipt) {
    let storeID = receipt.storeID;
    if (storeID == 0) {
        storeID = await InsertStore(receipt.storeName);
        if (!storeID) {
            console.log('Error inserting into store table');
            throw new Error('Error inserting into store table');
        }
    }
    const query = `INSERT INTO receipt ( purchase_date, store_id, quantity, subtotal, tax, total ) VALUES ( '${receipt.date}', ${storeID}, ${receipt.quantity}, ${receipt.subtotal}, ${receipt.tax}, ${receipt.total} ) RETURNING id`;
    const data = await dbq(query);
    return data;
}

async function insertPurchase(purchases) {
    const query = `INSERT INTO receipt ( ) VALUES ( )`;
    const data = await dbq(query);
    return data;
}

async function getStores(req, res) {
    const testResponse = {
        storeName: ['Sample Store 1','Sample Store 2'],
        storeID: [1,2]
    }
    res.status(200).json(testResponse);
}

async function insertStore(storeName) {
    // insert storeName and return id
    // if error return null
    return ;
}
