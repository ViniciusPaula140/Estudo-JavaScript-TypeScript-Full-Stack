function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(false)
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' Passei na promise')
        }, tempo)
    });
}

const variasPromises = [
    //'Primeiro Valor', - O RACER IRIA RESOLVE ISSO PRIMEIRO
    esperaAi('Promises 1', 3000),
    esperaAi('Promises 2', 4000),
    esperaAi('Promises 3', 1000),
    esperaAi('Promises 4', 6000),
    //'Outro Valor'
]

// ALL
/*Promise.all(variasPromises)
.then(resposta => {console.log(resposta)})*/


//RACE - A primeira COISA que resolver, me retorne
/*Promise.race(variasPromises)
.then(resposta => {
    console.log(resposta)
})
.catch(er => {
    console.log(er)
})*/

//REJECT E RESOLVE
function baixarPagina() {
    const paginaEmCache = false
    if (paginaEmCache) {
        return Promise.resolve('Pagina em cache!')
    } else {
        return esperaAi('Baixando a página', 3000)
    }
}

baixarPagina()
.then(resposta => {
    console.log(resposta)
})
.catch(e => console.log(e))
