const { io } = require('../index');

// Mensajes de sockets
io.on('connection', (client) => {
    console.log('Cliente conectado');

    // Escuchar 
    client.on('mensaje', ( payload ) => {
        console.log('Mensaje: ', payload);

        // emitir eventos
        io.emit('mensaje', { admin: 'Nuevo mensaje'});
    });

    client.on('disconnect', () => { console.log('Cliente desconectado') });
    
});