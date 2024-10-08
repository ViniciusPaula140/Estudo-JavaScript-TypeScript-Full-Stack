function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, rejeita) => {
        

        setTimeout(() => {
            if (typeof msg !== 'string') {
                rejeita('CAI NO ERRO');
                return
            } 

            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo)
    });
}

async function executa() {
    try{   
        const fase1 = await esperaAi('Fase 1', rand()) 
        console.log(fase1);
        
        const fase2 = await esperaAi('Fase 2', rand())
        console.log(fase2)

        const fase3 = await esperaAi('Fase 3', rand())
        console.log(fase3)

        console.log('Passamos em todas as fases')
    } catch(e) {
        console.log(e)
    }
}
executa()

