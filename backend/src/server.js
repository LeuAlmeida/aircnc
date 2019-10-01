const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-bsste.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true, // Silencia o erro do MongoDB
    useUnifiedTopology: true, // Silencia o erro do MongoDB
})

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição e delete)
// req.body = Acessar corpo da requisição (para criação e edição)

app.use(express.json());
app.use(routes);

app.listen(3333);