//Produto -> aumentar, desconto
//Camiseta -> cor, caneca -> material

function Produto(nomeProduto, valor){
    this.nomeProduto = nomeProduto;
    this.valor = valor;
};
Produto.prototype.aumentar = function(valorAumentar){
    this.valor = this.valor + this.valor * (valorAumentar/100)
    return this.valor;
}
Produto.prototype.desconto = function(valorDesconto){
    this.valor = this.valor - (this.valor * (valorDesconto / 100))
    return this.valor;
}


//Herança
function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco) //Produto.call = Falando que o this irá apontar para o Objeto Caneca, e fala os atributos/argumentos que desejo que essa funçao receba
    this.material = material; //Novo atributo
    
    //Criando getter e setter
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        
        get: function(){
            return estoque;
        },

        set: function(valor){
            if (typeof valor !== 'number') return
            estoque = valor
        }
    })
}
//Referindo o Objeto
Caneca.prototype = Object.create(Produto.prototype); //Fala que a caneca está sendo criada com o mesmo prototype de Produto
Caneca.prototype.constructor = Caneca; // Expecificando que o construtor desse Objeto é CANECA e não Produto


const p1 = new Produto('Caneca', 50)
const p2 = new Caneca('Caneca', 58, 'Preta', 10)

console.log(p2.aumentar(100))
p2.estoque = 5
console.log(p2.estoque)

