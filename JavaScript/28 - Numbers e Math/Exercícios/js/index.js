function inicio() {
    numf = document.querySelector('input#num')
    numero = Number(numf.value) //valores obtidos de um input, sempre são uma string, mesmo o input sendo Number

    resposta = document.querySelector('div#res')

    resposta.innerHTML = `<p>Seu número é: ${numero} </p>`

    resposta.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5} </p>`

    resposta.innerHTML += `<p>${numero} é um valor inteiro: ${Number.isInteger(numero)} </p>`

    
    resposta.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</
    p>`

    resposta.innerHTML += `<p>Arredonda para baixo: ${Math.floor(numero)} </p>`

    resposta.innerHTML += `<p>Arredonda para cima: ${Math.round(numero)} </p>`

    resposta.innerHTML += `<p>Duas casas decimais: ${numero.toFixed(2)} </p>`


}