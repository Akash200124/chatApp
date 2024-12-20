
const http = require('http');
const express = require('express');

const { Server } = require('socket.io');


const app = express();
const server = http.createServer(app);

const io = new Server(server);

//socket i.o
io.on('connection', (socket) => {

    socket.on("user-message:", (message) => {
        socket.broadcast.emit("message", message)
        // console.log("a new user message : ", message);
    })
});



// serving static files
app.use(express.static('/public'));

// sending index.html
app.get('/', (req, res) => {

    return res.sendFile(__dirname + '/public/index.html')
    
})

// starting server
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});




