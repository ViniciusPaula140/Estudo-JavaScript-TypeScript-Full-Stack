const numeros = [10, 20, 30, 40, 50, 60];

for(let i of numeros) {
    
    if (i === 20){
        console.log(`pulei o ${i}`)
        continue; //volta pra inicio do laço. 
    }
    if (i === 40){
        console.log('achei o 40. Encerrando.')
        break;
    }
    console.log(i)
}