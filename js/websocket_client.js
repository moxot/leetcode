const { io } = require("socket.io-client");

const socket = io("ws://localhost:5005", {
    transports: ['websocket'],
});

socket.on('connect', (e) => {
    console.log('connected', e);
    socket.emit('example event', { data: 'Hello from client!' });
})

socket.on('connect_error', (err) => {
    console.error(err);
})

socket.on('disconnect', (dc) => {
    console.log('disconnected', dc);
})