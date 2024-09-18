const frutas = ['banana', 'abacaxi', 'mamao']
for (let fruts in frutas) {
    console.log(frutas[fruts])
}

const pessoas = {
    nome: 'Vini',
    idade: 21,
    profissao: 'desempregado',
    endereco: {
        rua: 'taltal',
        numero: 2555
    }
};

for (let chave in pessoas){
    console.log(chave, pessoas[chave])
}

//pode ser usado com strings
const nome = 'vinicius'
for(let letras in nome ){
    console.log(nome[letras])
}

