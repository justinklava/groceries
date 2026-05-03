import {Client, Pool } from 'pg';

export { QueryDB, InsertReceipt, InsertPurchase };

if(!process.env.DB_USER || !process.env.DB_PASSWORD) {
    console.error('Environment file missing database user and/or password');
    throw new Error("Environment file missing database user and/or password");
}

const config = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_DATABASE || 'groceries',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
};

const pool = new Pool(config);

try {
    await pool.query('select * from receipt limit 1');
} catch (error) {
    console.error('Failed connection test to database: \n\t' + error.message);
    process.exit(1);
}

async function QueryDB(query) {
    try {
        const result = await pool.query(query);
        return result
    } catch (error) {
        console.error('QueryDB() error: \n\t' + error.message);
        return null;
    }
}

async function InsertReceipt(receipt) {
    const query = `INSERT INTO receipt ( ) VALUES ( )`;
    const client = await pool.connect();
    const res = await client.query(query);
    client.release();
}

async function InsertPurchase(purchases) {
    const query = `INSERT INTO receipt ( ) VALUES ( )`;
    const client = await pool.connect();
    const res = await client.query(query);
    client.release();
}


