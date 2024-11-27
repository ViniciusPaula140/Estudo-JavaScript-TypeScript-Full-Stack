//Iniciando servidor
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


//Importando routes
const routes = require('./routes');
const path = require('path');
const middlewares = require('./src/middlewares/globalMiddleware')


//Session, flash e mongoStore
const session = require('express-session');
const mongoStore = require('connect-mongo')
const flash = require('connect-flash')

//
app.use(express.urlencoded({ extended: true }));

// Pasta public
app.use(express.static(path.resolve(__dirname,  'public')))

//Configuração da session
const sessionOption = session({
    secret: "Posso colocar o que quiser aqui",
    store: new mongoStore({
        mongoUrl: process.env.CONNECTIONSTRING, // Use a URL de conexão do MongoDB diretamente
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // Quanto tempo o cookie irá durar
        httpOnly: true
    }
});

app.use(sessionOption)
app.use(flash())

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