//Posso usar o ...(spread) ou método concat.

//concat
const a1 = [0, 1, 2]
const a2 = [3, 4, 5]      //Posso colocar mais coisas
//const a3 = a1.concat(a2,     'Vinicius',   [6, 7, 8])


//...spread
const a3 = [...a1, ...a2]//também posso usar de mais coisas: [...a1, 'Vini, ...a2, [5, 6, 8]]
console.log (a3)