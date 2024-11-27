const express = require('express');
const app = express();
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


// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor em execução');
    console.log('http://localhost:3000');
});