//Map pode alterar o array ou objetos originais
//estrutra igual a da filter
//estrutura - x.map(valor, índice, array completo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros.map(valor => valor * 2)
console.log(dobro)



const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Walece', idade: 47}
]

const somenteStringNome = pessoas.map(valor => valor.nome);
const somenteIdade = pessoas.map(valor => ({idade: valor.idade})); //Posso criar um nome Objeto quando quiser que cada um esteja em cada objeto diferente

const criandoIdComIndice = pessoas.map((valor, indice) => {
    valor.id = (indice + 1) * 1000;
    return valor
})

console.log(criandoIdComIndice)
//Poderia usar numeros aleatorios para criar um id, mas preferir usar o indice