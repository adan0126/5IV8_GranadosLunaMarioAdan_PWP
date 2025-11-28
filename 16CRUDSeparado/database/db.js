const mysql2 = require('mysql2');

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'adan0126',
    database: 'cursosdb'
});

db.connect((err) => {
    if (err) {
        console.log('Error de conexion: ' + err.stack);    
    }
})

db.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos MySQL');
});

module.exports = db;