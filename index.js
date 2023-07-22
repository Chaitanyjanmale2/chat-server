const http = require('https').createServer();
const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

const os = require('os');
const hostname = os.hostname();

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (message) => {
        console.log(message);
        io.emit('message', `${socket.id.substr(0, 2)} said ${message}`);
    });
});

const PORT = 1234; // Allow dynamic port assignment for deployment

http.listen(PORT, () => console.log(`listening on http://:${PORT}`));
