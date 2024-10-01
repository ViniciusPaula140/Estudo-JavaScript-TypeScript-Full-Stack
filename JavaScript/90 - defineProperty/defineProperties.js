function Produto(nome, preco, estoque){
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: false
        },

        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: false
        },
        
        estoque: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: false,
        },
    })
};
const p1 = new Produto('Caneta', 30, 3)
console.log(p1)