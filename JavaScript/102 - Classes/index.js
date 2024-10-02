class Pessoa {
    //Definindo os atributos
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    //Prototype definido automaticamente
    falar(){
        console.log(this.nome + ' ' + this.sobrenome + ` está falando`)
    }
    comer(){
        console.log(this.nome + ' ' + this.sobrenome + ` está comendo`)
    }
    jogar(){
        console.log(this.nome + ' ' + this.sobrenome + ` está jogando`)
    }
}

//Crio o objeto igual uma construtora
const pessoa1 = new Pessoa('Vinícius', 'Paula')
pessoa1.falar()