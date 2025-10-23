var http = require('http')

// Vamos a crear nuestro propio servidor

var servidor = http.createServer(function(req, res){
    // req = request es una solicitud, viene por parte de la arquitectura cliente servidor, todos los clientes (navegador, usuarios, app)

    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    res.write('<h1>Hola mundo desde node</h1>');
    res.write('<h1>A mimir</h1>');
    res.write('<h1>A mimir X2</h1>');
    console.log('hola si entro el servidor');
    res.end();
})

servidor.listen(3000);

console.log('Servidor ejecutandose en http://localhost:3000')