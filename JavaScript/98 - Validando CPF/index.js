function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        get: function() {
            return cpfEnviado.replace(/\D+/g, '') // /\D+/g substitue tudo que nao for numero por nada, ou seja tirou os : . e -
        }
    })
}

ValidaCPF.prototype.validacao = function() {
    if (typeof this.cpfLimpo === 'undefined') return false;  //Se o CPF não for enviado
    if (this.cpfLimpo.length !== 11) return false; //Se o CPF nao tiver 11 caracteres
    if (this.sequencia()) return false
   
    const cpfParcial = this.cpfLimpo.slice(0, -2) //Para pegar os 9 primeiros digitos
    const digito1 = this.calculoNumeros(cpfParcial);
    const digito2 = this.calculoNumeros(cpfParcial + digito1)

    const novoCPF = cpfParcial + digito1 + digito2;
    return novoCPF === this.cpfLimpo;
}
ValidaCPF.prototype.calculoNumeros = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial); //Array.from( tranforma o envio em um array). EX: ["0", "2", "9"...]
    let regressivo = cpfArray.length + 1;
    let total = cpfArray.reduce((acumulador, valor) => {
        acumulador += (regressivo * Number(valor))
        regressivo --;
        return acumulador

    }, 0)
    
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}
ValidaCPF.prototype.sequencia = function() {
    const seq = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return seq === this.cpfLimpo
}


const cpf = new ValidaCPF('705.484.450-52')
console.log(cpf.validacao())