let container = document.querySelector('.container')
let div = document.createElement('div')
container.appendChild(div)

const elementos = [
    {tag: 'p', texto:'Frase1'},
    {tag: 'div', texto: 'Frase2'},
    {tag:'footer', texto:'Frase3'},
    {tag: 'section', texto: 'Frase4'}
];

for (let i = 0; i < elementos.length; i++){
    //Desestruturando via variaveis
    const {tag, texto} = elementos[i];
   
    //criando o elemento
    criacao = document.createElement(tag);
    
    //Adicionando texto ao elemento
    criacao.innerText = texto;
    
    //adicionando no container
    div.appendChild(criacao);
}