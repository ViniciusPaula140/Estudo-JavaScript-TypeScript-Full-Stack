require('dotenv').config();
const express = require('express');
const app = express();

//Conectando com o MongoDB
const mongoose = require('mongoose')

//Fazendo com que a conexão emita um sinal quando conectada, atráves de promise
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conexão com a base de dados foi bem sucedida!')
        app.emit('pronto') //<- essa é a minha emissão para quando o app.on('pronto')
    })
    .catch(e => console.log(e))

const routes = require('./routes');
const path = require('path');
const middlewares = require('./src/middlewares/globalMiddleware')


app.use(express.urlencoded({ extended: true }));

// Verifique o caminho das views no console
//console.log(path.resolve(__dirname, 'views'));

// Pasta public
app.use(express.static(path.resolve(__dirname,  'public')))

// Configura a pasta de views
app.set('views', path.resolve(__dirname, 'src', 'views'));;

// Configura o motor de visualização EJS
app.set('view engine', 'ejs');

// Usa as rotas definidas em routes.js
app.use(middlewares)
app.use(routes);


// Inicia o servidor na porta 3000, apos receber a emissão da promise de conexão
app.on('pronto', ()=> {
    app.listen(3000, ()=> {
        console.log('Porta 3000 - Liberada com sucesso!')
        console.log('http://localhost:3000')
    })
})