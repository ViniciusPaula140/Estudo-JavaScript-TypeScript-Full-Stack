/*function saudacao(nome = 'Sem nome'){
    return (`Bom dia, ${nome}`)
}*/

//Arrow function
let saudacao = (nome = 'sem nome') => {
    return (`Bom dia, ${nome}`);
}
console.log(saudacao('Vini'))



//raiz quadrada com função anonima
let raiz = function (n) {
    return n **0.5
};

console.log(raiz(25))

//raiz quadrada usando arrow function
let raizDois = n => n**0.5;    //quando só tem um paramentro nao precisa de () e nao precisa de {} pq ele ja entende que é o return

console.log(raizDois(25))

