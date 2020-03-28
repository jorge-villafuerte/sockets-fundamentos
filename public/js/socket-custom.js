var socket = io();
//Listen to connections
socket.on('connect', function() {
    console.log('conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Se perdio la conexion con el servidor');
});
//Send information
socket.emit('enviarMensaje', {
    usuario: 'Fernaando herrera',
    mensaje: 'Hola mundo'
}, function(rsp) {
    console.log('Respuesta servidor', rsp);
});

//receive information
socket.on('enviarMensaje', (mensaje) => {
    console.log('Servidor: ', mensaje);
})