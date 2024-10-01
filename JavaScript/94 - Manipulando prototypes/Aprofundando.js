function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(porcentual){
    this.preco = this.preco - (this.preco * (porcentual / 100))
};
Produto.prototype.aumetar = function(porcentual){
    this.preco = this.preco + (this.preco * (porcentual /100))
}

const pd1 = new Produto('Camisa', 50);
pd1.aumetar(100)
console.log(pd1)

//Irei criar um novo Objeto que reaproveita os metodos de um Objeto
const pd2 = {
    nome: 'Caneta',
    preco: 100,
}

Object.setPrototypeOf(pd2, Produto.prototype) //Digo que o produto B tem o mesmo prototype de Produto

pd2.aumetar(100) //Esse metodo está aqui somente pq do setPrototypeOf
console.log(pd2)

//Para definir um o prototype do objeto de cara:
const pd3 = Object.create(Produto.prototype, {
    preco: {
        writable: true, //Posso alterar?
        configurable: true, //Se criar outro posso alterar ?
        enumerable: true, //Exibo a chave?
        value: 200
    },

    nome: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 'Roupa'
    }
}) 

pd3.aumetar(100) //Metodo graças ao Object.create(Produto.prototype)
console.log(pd3)