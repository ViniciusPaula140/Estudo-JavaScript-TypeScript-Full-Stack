function Conta(agencia, banco, saldo) {
    this.agencia = agencia;
    this.banco = banco;
    this.saldo = saldo;
}
Conta.prototype.sacar = function(valor) {
    if (this.saldo < valor) return 'Saldo insufiente'
    this.saldo -= valor
    return `Saque realizado com sucesso! Novo saldo - ${this.verSaldo()}`

}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    return this.verSaldo()
}

Conta.prototype.verSaldo = function() {
    
    return `Ag/a: ${this.agencia}/${this.banco} | Saldo: ${this.saldo}`
    
}
const conta1 = new Conta(11, 22, 33)
console.log(conta1.sacar(3))



console.log()
//Polimorfismo, criar algo com as mesmas heranças com um comportamento diferente
//Vamos criar uma conta corrente com adicional de limite de saque
function ContaCorrente(agencia, banco, saldo, limite){
    Conta.call(this, agencia, banco, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente;

//Sobreescrever o mesmo metodo do pai, se comportando de maneora diferente
ContaCorrente.prototype.sacar = function(valor){
    if (this.saldo + this.limite < valor ) return `Saldo insuficienete - ${this.verSaldo()}`
    
    this.saldo -= valor;
    return `Operação realizada com sucesso! Novo saldo - ${this.verSaldo()}`
}
const cc = new ContaCorrente(11, 0, 10, 100);
console.log(cc.sacar(120))
