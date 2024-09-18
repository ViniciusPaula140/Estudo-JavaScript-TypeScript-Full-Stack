function num(x) {
    if (typeof x === 'number') {

        if (x > 0 && x <= 100) {
            let resposta = '';

            if (x % 3 === 0 && x % 5 === 0) {
                resposta = 'FizzBuzz'
                return resposta
            }
            if (x % 3 === 0) {
                resposta = 'Fizz'
                return resposta
            }
            if (x % 5 === 0) {
                resposta = 'Buzz'
                return resposta
            } else {
                resposta = `O número ${x} não é divisível por 5 e nem por 3`
                return resposta
            }

        } else {
            return `O número ${x} não está entre 0 e 100`
        }
    } else {
        return `${x} não é um número`
    }
}
console.log(num(15))
