
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const pool = mysql.createPool({
    host: process.env.DB_SERVER || 'localhost',
    user: process.env.DB_USER || 'usuarioprueba',
    password: process.env.DB_PASSWORD || '129486',
    database: process.env.DB_DATABASE || 'vehiculosdb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

