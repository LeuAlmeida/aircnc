const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http');


const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WARNING!
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Do you will need to change the mongoose.connect('...') with your MongoDB Connection. 
// I removed my code because I noticed that some users who were forking my repository ended up polluting the database with testing.
// Learn about how to create a MongoDB Cluster and connect get the connect code in https://docs.atlas.mongodb.com/connect-to-cluster/

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-dnpes.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true, // Silencia o erro do MongoDB
    useUnifiedTopology: true, // Silencia o erro do MongoDB
})

const connectedUsers = {};

io.on('connection', socket => {
    const { user_id } = socket.handshake.query;

    connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(3333);

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição e delete)
// req.body = Acessar corpo da requisição (para criação e edição)