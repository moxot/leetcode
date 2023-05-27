const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');

const port = 5005;

const server = http.createServer();
const io = new Server(server, {
    transports: ['websocket']
});

app.use(express.json());

app.post('/api/send_message', (req, res) => {
    console.log('test post');
    const { client_id, message } = req.body;
    if (!client_id || !message) {
        return res.status(400).json({ error: 'Missing parameters' });
    }
    io.to(client_id).emit('message', message);
    return res.json({ success: true });
});

io.on('connection', (socket) => {
    console.log('A client has connected!');

    const query = socket.handshake.query;
    console.log('Query params:', query);

    const room = `${query.client_hash}:${query.abon_code}`

    console.log(room);

    socket.join(room);

    // Отправляем сообщение "hello" в сокет при подключении клиента
    socket.emit('message', `hello`);

    socket.on('disconnect', () => {
        console.log('A client has disconnected');
    });

    socket.on('event', (data) => {
        console.log('Received an event:', data);
        // Handle the event
    });
});


server.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});