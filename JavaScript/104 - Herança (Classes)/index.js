class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' ' + 'já está ligado')
            return
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' ' + 'já está deligado')
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){ //cor, modelo polimorfismo e o nome o PAI tem um atributo
    super(nome)
    this.cor = cor;
    this.modelo = modelo;
    }
}

const i1 = new Smartphone('sansung', 'preto', 'modelo')
console.log(i1)