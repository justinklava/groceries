import path from 'path';
import {fileURLToPath} from 'url';

import dbq from '../config/db.js';

export { Insert };

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

async function Insert(obj) {
    // get values from form object and process
    // call Insert functions with processed values
}

async function InsertReceipt(receipt) {
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

async function InsertPurchase(purchases) {
    const query = `INSERT INTO receipt ( ) VALUES ( )`;
    const data = await dbq(query);
    return data;
}

async function InsertStore(storeName) {
    // insert storeName and return id
    // if error return null
    return ;
}
