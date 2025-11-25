/*
CRUD para la bitácora de mantenimiento
*/

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const ejs = require('ejs');
require('dotenv').config({ path: './.env' });

const app = express();
const port = 3000;

// CONFIGURACIÓN DE MYSQL

const bd = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

bd.connect((error) => {
    if (error) {
        console.log('Error de conexión a la base de datos: ' + error);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

// MIDDLEWARE

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/css', express.static(__dirname + '/css'));

// RUTAS CRUD PARA MANTENIMIENTO
// Ruta principal: muestra registros y formulario
app.get('/', (req, res) => {
    const query = "SELECT * FROM Mantenimiento ORDER BY FechaHora DESC";

    bd.query(query, (error, resultados) => {
        if (error) {
            console.log("Error al obtener registros: " + error);
            res.status(500).send("Error al obtener registros");
        } else {
            res.render('index', { datos: resultados });
        }
    });
});

// Crear nuevo registro
app.post('/mantenimiento', (req, res) => {
    const { FechaHora, ID_Equipo, Fallo, Diagnostico, Correccion, Remplazo, Inactividad } = req.body;

    const query = `
        INSERT INTO Mantenimiento 
        (FechaHora, ID_Equipo, Fallo, Diagnostico, Correccion, Remplazo, Inactividad)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    bd.query(
        query,
        [FechaHora, ID_Equipo, Fallo, Diagnostico, Correccion, Remplazo, Inactividad],
        (error) => {
            if (error) {
                console.log("Error al crear el registro: " + error);
                res.status(500).send("Error al crear el registro");
            } else {
                res.redirect('/');
            }
        }
    );
});

// Eliminar registro
app.get('/mantenimiento/delete/:id', (req, res) => {
    const id = req.params.id;

    const query = "DELETE FROM Mantenimiento WHERE id = ?";

    bd.query(query, [id], (error) => {
        if (error) {
            console.log("Error al eliminar el registro: " + error);
            res.status(500).send("Error al eliminar el registro");
        } else {
            res.redirect('/');
        }
    });
});

// Cargar datos para editar
app.get('/mantenimiento/edit/:id', (req, res) => {
    const id = req.params.id;

    const query = "SELECT * FROM Mantenimiento WHERE id = ?";

    bd.query(query, [id], (error, resultados) => {
        if (error) {
            console.log("Error al obtener el registro: " + error);
            res.status(500).send("Error al obtener el registro");
        } else {
            res.render('edit', { registro: resultados[0] });
        }
    });
});

// Actualizar registro
app.post('/mantenimiento/update/:id', (req, res) => {
    const id = req.params.id;
    const { FechaHora, Fallo, Diagnostico, Correccion, Remplazo, Inactividad } = req.body;

    const query = `
        UPDATE Mantenimiento SET
            FechaHora = ?, 
            Fallo = ?, 
            Diagnostico = ?, 
            Correccion = ?, 
            Remplazo = ?, 
            Inactividad = ?
        WHERE id = ?
    `;

    bd.query(
        query,
        [
            FechaHora,
            Fallo,
            Diagnostico,
            Correccion,
            Remplazo,
            Inactividad,
            id
        ],
        (error) => {
            if (error) {
                console.log("Error al actualizar registro: " + error);
                res.status(500).send("Error al actualizar registro");
            } else {
                res.redirect('/');
            }
        }
    );
});

// SERVIDOR

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
