const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: 'http://localhost:3000', methods: ['GET', 'POST'] },
});

app.use(cors());
app.use(express.json());

const connectionRequests = {}; // Store connection requests

app.post('/send-interact-request', (req, res) => {
    const { sender, recipient } = req.body;
    connectionRequests[recipient] = sender;
    io.emit('connection-request', { sender, recipient });
    res.json({ success: true });
});

app.post('/accept-request', (req, res) => {
    const { sender, recipient } = req.body;
    io.emit('connection-accepted', { sender, recipient });
    res.json({ success: true });
});

io.on('connection', (socket) => {
    socket.on('send-message', (data) => {
        io.emit('new-message', data);
    });
});

server.listen(5050, () => {
    console.log('Server running on http://localhost:5050');
});
