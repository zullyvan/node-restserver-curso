require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//habilitar la carpeta public para acceder dese cualquier lugar, con el middleware
app.use(express.static(path.resolve(__dirname, '../public')));

//configuracion global de rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err, res) => {
    if (err) throw err;
    console.log('Base de datos online');
});
/*
mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {
    if (err) throw err;
    console.log('Base de datos online');
});*/

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});