const mirrow = (req, res) => {

    const metodos = [{

        method: 'POST',
        hasBody: true,
        purpouse: "El metodo post se utilza para enviar una entidad a un recurso especifico, causando a menudo un cambio en el estado, o efectos secundarios en el servidor (registrar)"
    } , {
        method: 'PUT',
        hasBody: true,
        porpouse: "El metodo put remplaza todas las representaciones actuales del recurso del destino con carga util de la petición (update)"
    } , {
        method: 'PATCH',
        hasBody: true,
        porpouse: "El metod patch es utilizado para aplicar modificaciones parciales a un recurso (update a una parte)"
    } , {
        method: 'HEAD',
        hasBody: false,
        porpouse: "El metodo head pide una respuesta identica a la de una petición get, pero sin el cuerpo de la respuesta"
    } , {
        method: 'GET',
        hasBody: false,
        porpouse: "El metodo get solicita una representación de un recurso especifico, las peticiones que usan el metodo get solo deben recuperar datos"
    } , {
        method: 'DELETE',
        hasBody: false,
        porpouse: "El metodo delete elimina el recurso especificado"
    }];

    const requestMethod = method.find(

        m => m.method === req.method

    ) || {

        method : req.method,
        hasBody : false,
        porpouse : "No tiene un body, no hay una respuesta, metodo no soportado"

    };

    requestMethod.porpouse += requestMethod.hasBody ? "Tiene cuerpo" : "No tiene cuerpo";

    if ( requestMethod.hasBody ) {

        req.body; // JS debe de parsear mediante un json el objeto necesario
        res.json({ ...req.body , ruta_consumida : req.route.path , ...requestMethod });

    } else {

        res.json({ ruta_consumida : req.originalUrl , ...requestMethod })

    }

};

module.exports = mirrow;
