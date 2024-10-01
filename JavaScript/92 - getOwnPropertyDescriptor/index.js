//Usado para saber como está se comportando um chave dentro de um Objeto
//Estrutura - getOwnPropertyDescriptor(produto, 'chave')
const produto = {nome: 'Camiseta', preco: 20}
console.log(Object.getOwnPropertyDescriptor(produto, ' nome'))