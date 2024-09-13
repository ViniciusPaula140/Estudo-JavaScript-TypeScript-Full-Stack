function calcular() {
    let pesof = document.querySelector('#peso')
    let alturaf = document.querySelector('#altura')
    let peso = Number(pesof.value)
    let altura = Number(alturaf.value)

    let resposta = document.querySelector('.resultado')
    let imc = null;
    let generico = null;
    
    
    //Tratando erros
    if (pesof.value.length === 0 || alturaf.value.length === 0){
        window.alert('erro')
    //Lógica
    }else {
        imc = peso / (altura**2)
        generico = `<strong>Seu imc é ${imc.toFixed(2)} </strong><br>`
        
        if (imc <= 18.5) {
            resposta.innerHTML = generico + ' Abaixo do peso ideal'
        }
        if (imc > 18.5 && imc <= 24.9){
            resposta.innerHTML = generico + ' Peso normal'
        }
        if (imc > 24.9 && imc <= 29.9) {
            resposta.innerHTML = generico + ' Sobrepeso'
        }
        if (imc > 29.9 && imc <= 34.9) {
            resposta.innerHTML = generico + ' Obesidade grau I'
        }
        if (imc > 34.9 && imc <= 39.9) {
            resposta.innerHTML = generico + ' Obesidade grau II'
        }
        if (imc >= 40) {
            resposta.innerHTML = generico + ' Obesidade grau III'
        }
    }
    pesof.value = ''
    alturaf. value = ''
    pesof.focus()
}