function randomNumber(max, min){
    const one = Math.random() * (max - min ) + min
    return Math.floor(one)
};

function maiorMenor(){
    const primeiro = randomNumber(50, 5);
    const segundo = randomNumber(50, 5);
    
    return primeiro > segundo ? `${primeiro} maior 1ºvalor` : `${segundo} maior - 2º valor`

};
console.log(maiorMenor())



