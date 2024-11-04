const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world')
});


app.get('/contato', (req, res) => {
    res.send('Estou na pagina de contatos')
});

app.listen(3000, () => {
    console.log('Acessar servidor http://localhost:3000');
    console.log('Servidor em execução')
})