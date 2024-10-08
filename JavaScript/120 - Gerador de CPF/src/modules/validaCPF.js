export default class ValidarCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '') // Remove caracteres não numéricos
        });
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.sequencia()) return false;
        this.gerarNovoCPF();

        
        return this.novoCPF === this.cpfLimpo;
    }

    sequencia() {
        return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo; // Verifica se todos os dígitos são iguais
    }

    gerarNovoCPF() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidarCPF.gerarDigito(cpfSemDigitos);
        const digito2 = ValidarCPF.gerarDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2; // Novo CPF gerado
    }

    static gerarDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;
        for (let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito); // Retorna o dígito, considerando a regra de CPF
    }
}

const validacao = new ValidarCPF('070.987.720-03');
console.log(validacao.valida()); // Chama o método de validação

console.log('cheguei aq')