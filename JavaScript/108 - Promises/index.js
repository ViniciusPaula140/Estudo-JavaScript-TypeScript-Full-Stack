function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, rejeita) => {
        if (typeof msg !== 'string') rejeita(false);

        setTimeout(() => {
            resolve(msg);
        }, tempo)
    });
}