function Produto (produto, preco, estoque){
    this.produto = produto;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        value: estoque, //Mostra o valor dentro da chave
        writable: false, //Pode ser alterado? se comporta semelhante ao freeze
        configurable: false //Se eu criar outro metodo semelhante eu posso reconfigurar essa propiedade ?

    })
}
//Se o whitable estiver true, poderei delete p1.estoque
const p1 = new Produto('Caneta', 30, 3)
console.log(p1)

const OutraCoisa = {nome: 'Caneca', preco: 20}
Object.defineProperty(OutraCoisa, 'nome', {
    writable: true,
    configurable: false
})