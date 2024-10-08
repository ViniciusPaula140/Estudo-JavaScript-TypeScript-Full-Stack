const nome = 'Vinícius';
const sobrenome = 'Paula';
const idade = 21;

function soma(x, y) {
    return x + y
}

export { nome as nomeModulo, sobrenome, idade, soma } //Posso exporta como nomeModulo 

//Posso exportar já na criação

export class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
}