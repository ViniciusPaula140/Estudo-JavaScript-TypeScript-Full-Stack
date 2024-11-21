function rand(min, max) {
    min*=1000
    max*=1000
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo) {
    return new Promise ((resolve, reject) => {
        if (typeof msg !== 'string') reject('Erro de tipografia > LOCAL: ');
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

function executar() {
    esperaAi('Conectando ao DB', rand(1, 3))
    .then(conexaoDB => {
        console.log(conexaoDB)
        return esperaAi('Verificando dados no DB', rand(1,3))
    })
    .catch(e => {
        console.log(e + ' Conexão com o DB')
    })
    .then(verificacaoDados => {
        console.log(verificacaoDados)
        return esperaAi('Preparando para exibição...', rand(1, 3))
    })
    .catch(e => {
        console.log(e + ' Verificação de dados.')
    })
    .then(exibicao => {
        console.log(exibicao)
        return esperaAi('Exibido com sucesso!', rand(1,3))
    })
    .catch(e => {
        console.log(e + ' Exibição dos dados')
    })
    .then(respostaFinal => console.log(respostaFinal))
}
executar()