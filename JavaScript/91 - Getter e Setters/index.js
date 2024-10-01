function Pessoa(produto, valor, estoque){
    this.produto = produto;
    this.valor = valor;
    let estoquePrivado;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        //Não preciso de value e writable. Pq vou ter o get (Substituindo o value e o set (substituindo o writable, pq posso alterar com o set))

        get: function() {
            return estoquePrivado;
        },

        set: function(valorEstoque) {
            if (typeof valorEstoque !== 'number') {
                throw new TypeError ('ERRO MENSAGEM');
            }
            estoquePrivado = valorEstoque;
        }
    })
};
p1 = new Pessoa('Camisa', 50, 10);
p1.estoque = 5000
console.log(p1.estoque);