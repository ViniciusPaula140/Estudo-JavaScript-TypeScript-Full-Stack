import { nomeModulo, sobrenome, idade, soma, Pessoa } from "./modulo1"; //Posso importar como nome as nomeModulo

const nome = 'Ariane'
console.log(nomeModulo, sobrenome, idade);
console.log(nome + ' ' + 'Não pertenço ao modulo')
console.log(soma(5,5))

//Pessoa importada
const p1 = new Pessoa('Alex', 'Correia', 50)
console.log(p1)