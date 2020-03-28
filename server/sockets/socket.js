const { io } = require('../server');

io.on('connection', (cliente) => {
    console.log('Usuario se conecto');

    /* cliente.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la aplicacion'
    }) */
    cliente.on('disconnect', () => {
        console.log('Usuario se ha desconectado');
    })

    //Escuchar el cliente
    cliente.on('enviarMensaje', (data, callback) => {
        console.log(data);
        //Funcinoamiento:
        //1: el cliente emite un mensaje "emit" por el canal "nuevo mensaje"
        //2: el servidor escuchar por ese canal y captura el mensaje "data"
        //3: el servidor vuelve a emitir a todos con broadcast el mensaje recibido
        //4: todo los clientes estan escuchando por el canal "enviarmensjae" asi que les llega a todos
        cliente.broadcast.emit('enviarMensaje', data);

    })
});