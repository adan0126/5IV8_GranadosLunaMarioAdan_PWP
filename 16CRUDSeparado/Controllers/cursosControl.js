//necesitamos crear un crud de cursos

//necesitamos es la conexion con la bd
const dbConection = require('../database/db.js');

// ========================= Vamos a crear los endponits =========================

// obtener cursos
 const getCursos = (req, res) => {
    try{
        dbConection.query('SELECT * FROM cursos', (error, results) => {
            if(error) {
                return res.status(400).json({ message: 'Error al obtener los cursos' });
                console.log(error);
            } else {
                res.status(200).json(results);  
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error del servidor' });
        console.log(error);
    }   
 };

// obtener por id
 const getCursosByid = (req, res) => {
    try{
        const id = req.params.id;
        dbConection.query('SELECT * FROM cursos WHERE id = ?', [id], (error, results) => {
            if(error) {
                return res.status(400).json({ message: 'Error al obtener los cursos' });
                console.log(error);
            } else {
                res.status(200).json(results);  
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error del servidor' });
        console.log(error);
    }   
 };

 // crear curso


 // actualizar curso


 // eliminar curso

 module.exports = {
    getCursos,
    getCursosByid,
    /*createCurso,
    updateCurso,
    deleteCurso*/
 };