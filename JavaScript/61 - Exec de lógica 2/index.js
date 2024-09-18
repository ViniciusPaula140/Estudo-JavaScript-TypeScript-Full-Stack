//Escrever uma função chamada ePaisagem que receba dois argumentos, largura e altura de uma imagem (number). retorne true se a imagem estiver no modo paisagem

const ePaisagem = (altura, largura) => largura > altura //nao preciso de ternário, pq se a largura maior que a largura ele já vai ser um true e virce versa
console.log(ePaisagem(150, 300))
