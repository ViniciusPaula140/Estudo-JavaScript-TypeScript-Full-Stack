//Usado para reduzir o array em um elemento só
//ESTRUTURA DO REDUCE - x.reduce(acumulador, valor, indice, array)

//Some todos os números (reduce)
//Retorne um array com números pares (filter)
//retorne um array com o dobro dos valores (map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor) => acumulador += valor) //Caso não especificar o acumuladorm, o acumulador passa a ser o primeiro indice do array
//Para especificar o acumulador = numero.reduce(valor {}0); //Especifiquei como 0

//console.log(total)


const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Walece', idade: 47}
]

//Pessoa mais velha
const MaisVelha = pessoas.reduce((acumulador, valor) => {
    return acumulador.idade > valor.idade ? acumulador : valor;
})
console.log(MaisVelha)