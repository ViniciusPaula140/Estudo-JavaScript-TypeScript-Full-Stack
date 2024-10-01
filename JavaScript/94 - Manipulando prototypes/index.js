//Usado para reaproveitar códigos e funcções em outros objetos
const chaveA = {
    chaveA: 'A'
};

const chaveB = {
    chaveB: 'B'
}


//Configurar um objeto para outro
//Cadeia padrão exemplo: Pessoa1 -> Pessoa.Prototype -> Object.prototype (Pai de todos)
//Porém posso fazer ChaveB -> ChaveA -> ...
Object.setPrototypeOf(chaveB, chaveA) //Quero que chave B, seja ''filho'' de Chave A


console.dir(chaveB)