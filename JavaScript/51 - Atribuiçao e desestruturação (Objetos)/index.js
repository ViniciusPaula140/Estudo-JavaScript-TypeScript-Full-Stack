const pessoa = {
    nome: 'Vinícius',
    sobrenome: 'Paula',
    idade: 21,
    endereco: {
        rua: 'Utopia dos sonhos',
        numero: 40028922
    }

}

//atribuição via desestruturação, Neste caso obrigátorio o nome da variavel ser o mesmo da variavel do objeto
const {nome = 'Sem vulgo', sobrenome = ' ', idade = ' '} = pessoa; //crie uma variável com esses nomes {} baseando-se em pessoa;
console.log(nome, sobrenome, idade) // Posso atribuir um valor padrão

//Caso queira que a variavel nao tenha o mesmo nome da variável do objeto
const {nome: outroNomeVariavel = ' '} = pessoa;
console.log(outroNomeVariavel)


//Atribuindo a variavel dentro do objeto dentro do objeto
const {endereco: {rua, numero}} = pessoa; //Se referindo a objetos dentro do objeto

console.log(rua, numero)

// Poderia seguir a mesma coisa, se nao quisesse atribuir o mesmo nome da variavel 
const {endereco: {rua: outroNomeRua = ' ', numero: outroNumero = " "}} = pessoa;
console.log(outroNomeRua, outroNumero)

//Usando rest
const {nome: outroNome, ...resto} = pessoa;
console.log(outroNome, resto)



