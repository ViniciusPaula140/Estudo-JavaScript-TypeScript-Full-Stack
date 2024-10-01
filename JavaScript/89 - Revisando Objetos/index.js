// Factory functions/ Constructor functions / Classes

//Constructor 
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = (f => `${this.nome} ` + `${this.sobrenome}`)
};

const pessoa1 = new Pessoa('Vinicius', 'Paula')

console.log(pessoa1)