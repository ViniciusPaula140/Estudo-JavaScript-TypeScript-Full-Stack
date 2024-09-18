const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

//Formando o tempo para ele ficar 00:00:00
function formatarTempo(seg){
    const data = new Date(seg * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

//Função que faz o relogio andar, no qual adiciona ++ aos segundos. Lembrando que, o ,1000 no final é pq pertecendo a propria funcao setInterval vc especificar quanto mlseg(1000 = 1sg) 
function andarRelogio(){
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = formatarTempo(segundos)
    }, 1000)
}

//clearInterval limpa as informações do timer e chama a funcção de iniciar
iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado')
    clearInterval(timer);
    andarRelogio();
})

pausar.addEventListener('click', function(event) {
    relogio.classList.add('pausado')
    clearInterval(timer);
})

zerar.addEventListener('click', function(event){
    relogio.classList.remove('pausado')
    relogio.innerHTML = '00:00:00'
    clearInterval(timer);
    segundos = 0;
})

