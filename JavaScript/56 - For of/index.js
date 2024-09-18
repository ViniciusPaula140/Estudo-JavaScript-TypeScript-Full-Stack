//Diferente de de ser com chaves como no for in. usa o valor mesmo
const arrayNomes = ['vinicius', 'Paula', 'Ribeiro'];
const nome = 'vinicius'
for(let letra of nome){
    console.log(letra)
}

//para arrays
arrayNomes.forEach(function(valor, indice){
    console.log(valor, indice)
});

