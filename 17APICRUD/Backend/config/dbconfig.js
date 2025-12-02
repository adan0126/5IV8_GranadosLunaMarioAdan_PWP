import mysql2 from 'mysql2';
import dotenv from 'dotenv';

// Si vamos a tener una base de datos en servidor debemos tener lo siguiente
// import {fileURLToPath} from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// Configuramos dotenv para manejar variables de entorno

// dotenv.config({ path: path.resolve(__dirname, '../.env') });

// -------------------------------------------------

dotenv.config();

const config = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    // connectionLimit: 10,
    // acquireTimeout: 30000,
    // idleTimeout: 30000,
});

config.getConnection((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        return;
    } else {
        console.log('Conexión a la base de datos exitosa');
        connection.release();
    }
});