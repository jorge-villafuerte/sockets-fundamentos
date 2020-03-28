const express = require('express');
const socketIO = require('socket.io');
const app = express();
const http = require('http');
const path = require('path');
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

let server = http.createServer(app);

app.use(express.static(publicPath));

//Inicializar socket IO -> COMUNICACION DEL BACKEND
module.exports.io = socketIO(server);
//importamos el codigo hecho con sockets 
require('./sockets/socket');


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});