//Filter sempre retorna um array com a mesma quantidade ou menos
//Retorna true para que adicione no novo array
const numeros = [1, 5, 11, 50, 26, 30, 22]
const filtrados = numeros.filter(valor => valor > 10);
console.log(filtrados)



const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Walece', idade: 47}
]

const nomeComCincoElementos = pessoas.filter(el => el.nome.length >= 5);
const idadeAcimaDeCinquentaAnos = pessoas.filter(years => years.idade > 50);
const nomeTerminaComA = pessoas.filter(name => name.nome.toLowerCase().endsWith('a'))

console.log(nomeTerminaComA)