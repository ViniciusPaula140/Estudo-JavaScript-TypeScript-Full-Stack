function rand(min, max) {
    min*=1000
    max*=1000
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo) {
    return new Promise ((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Erro de tipografia > LOCAL: ');
            return;
        };
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

function executar() {
    esperaAi('Conectando ao DB', rand(1, 3))
    .then(conexaoDB => {
        console.log(conexaoDB)
        return esperaAi('Verificação dos dados', rand(1,3))
    })
    .catch(e => {
        console.log(e + ' Conexão com o DB')
        throw new Error(e)
    })
    .then(verificacaoDados => {
        console.log(verificacaoDados)
        return esperaAi('Preparando para exibição...', rand(1, 3))
    })
    .catch(e => {
        console.log(e + ' Verificação de dados.')
        throw new Error(e)
    })
    .then(exibicao => {
        console.log(exibicao)
        return esperaAi('Exibido com sucesso!', rand(1,3))
    })
    .catch(e => {
        console.log(e + ' Exibição dos dados')
        throw new Error(e)
    })
    .then(respostaFinal => console.log(respostaFinal))
}
executar()