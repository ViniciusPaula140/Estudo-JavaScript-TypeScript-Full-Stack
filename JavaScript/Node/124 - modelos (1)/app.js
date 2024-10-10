const { Pessoa } = require("./mode1");
const axios = require('axios') //Pacotes baixados nao preciso falar o caminho

const p1 = new Pessoa('Vini')
console.log(p1)

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e))
