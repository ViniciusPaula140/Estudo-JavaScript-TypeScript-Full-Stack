function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    //Se o metódo estiver declarado aqui, terá prioridade
    //this.nomeCompleto = () => 'ORIGINAL'
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
};


const p1 = new Pessoa('Vinicius','Paula')
console.dir(p1)