// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const copyNumeros = [...numeros]

const resultArray= copyNumeros.filter(f =>  f % 2 === 0).map(f => f * 2).reduce((contador, valor) => valor += contador, 0)

console.log(resultArray)