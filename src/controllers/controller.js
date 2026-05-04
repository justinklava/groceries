import path from 'path';
import {fileURLToPath} from 'url';

import dbq from '../config/db.js';

export { Insert };

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

async function Insert(form) {
    
}

async function InsertReceipt(receipt) {
    // get store_id 
    const query = `INSERT INTO receipt ( purchase_date, store_id, quantity, subtotal, tax, total ) VALUES ( '${receipt.date}', ${receipt.storeID} )`;
    const data = await dbq(query);
    return data;
}

async function InsertPurchase(purchases) {
    const query = `INSERT INTO receipt ( ) VALUES ( )`;
    const data = await dbq(query);
    return data;
}
