const express = require('express')
const app = express();

//req, res = requisição e resposta

app.get('/', (req, res) => {
    res.send(`
        <form action='/' method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar formulario</button>
        </form>
    `)
})

app.post('/', (req, res) => {
    res.send('Recebi o formulario')
})

app.get('/contatos', (req, res) => {
    res.send('Entre em contato atráves de (XX)XXXXX-XXXX')
})

app.listen(3000,() => {
    console.log('Servidor em execução')
    console.log('http://localhost:3000')
})