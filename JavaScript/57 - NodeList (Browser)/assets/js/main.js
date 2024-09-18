//Lembre que se tentar rodar aqui irá retornar erro. precisa ser feito no Browser

//precisamos criar os elementos aqui, porem visualizar no navegador
const paragrafos = document.querySelector('.paragrafos');


const todosOsP = paragrafos.querySelectorAll('p')
//chame 'todosOsP' no console do navegador para visualizar

//simplificando o forEach
todosOsP.forEach(paragrafos => paragrafos.style.background = '#ff00ff');


