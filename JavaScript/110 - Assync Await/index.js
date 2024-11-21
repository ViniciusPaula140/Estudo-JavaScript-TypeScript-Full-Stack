function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function treinoPromise(msg, tempo) {
    return new Promise ((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('ERRO DE TIPOGRAFIA')
            return
        }
        setTimeout(() => {
            resolve(msg.toLocaleUpperCase())
        }, tempo)
    })
}

async function executa() {
    try {
        const fase1 = await treinoPromise('Fase 1', rand())
        console.log(fase1)

        const fase2 = await treinoPromise('Fase 2', rand())
        console.log(fase2)

        const fase3 = await treinoPromise('Fase 3', rand())
        console.log(fase3)

    }
    catch(e) {
        console.log(e)
    }
}
executa();


