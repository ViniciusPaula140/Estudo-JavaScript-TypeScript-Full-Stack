const baseando = [0, 1, 2, 3];
const [primeiroValor, segundoValor, terceiroValor, quartoValor] = baseando;
//Crio um variável que se atribui ao valores dentro do array, basenado-se no array

console.log(primeiroValor, segundoValor, terceiroValor)

/*--Outra maneira:--*/
const outraManeira = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]];
const [lista1, lista2, lista3] = outraManeira; //atribuindo uma variável para cada indice do array
console.log(lista2);
console.log(lista2[0]); //para exibir um indice dentro da lista indice

/*--Outra maneira:--* Pode ou nao atribuir*/
const n = [100, 200, 300, 400, 500];
const [cem, ,trezentos, ,quinhentos] = n; //quando nao quero atribuir, eu pulo com virgulas
console.log(cem, trezentos, quinhentos)

/*--Outra maneira:--*/
//Exemplo de ...resto
const numero = [1, 2, 3, 4, 5, 6];
const [um, dois, tres, ...resto] = numero; //atribui variaveis de um a três, o ... é para dizer que o que sobrar depois disso, atribuir a variavel "resto"
console.log(resto)
