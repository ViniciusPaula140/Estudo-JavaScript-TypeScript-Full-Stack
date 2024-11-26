const express = require('express')
const app = express();
const routes = require('./routes')

app.use(express.urlencoded({extended: true})) //Usado para tratar a ?
app.use(routes)

//req, res = requisição e resposta


app.listen(3000,() => {
    console.log('Servidor em execução')
    console.log('http://localhost:3000')
})