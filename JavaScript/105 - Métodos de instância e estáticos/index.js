class Controle {
    constructor(nome) {
        this.nome = nome;
        this.volume = 0;
    }

    //Método de instancia
    aumentar() {
        return this.volume++
    }



    //Metódo estático, só consigo chamar ela atraves de da classe
    static soma(x, y) {
        return x + y
    }

}

//STATICO NAO TEM ACESSO AOS DADOS (CONSTRUTOR) DA INTANCIA(CLASSE)

const c1 = new Controle('LG');
console.log(Controle.soma(5, 10))
