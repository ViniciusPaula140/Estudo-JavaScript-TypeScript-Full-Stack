//Funcões preguiuçosas
function* geradora1(){
    yield 'Valor 1'
    yield 'Valor 2'
    yield 'Valor 3'
}

//Como se fosser respostas por pausa:
//Se comporta como uma lista, posso usar for in/of
const g1 = geradora1();
console.log(g1.next()) //Chamei o primeiro yield
console.log(g1.next()) //Chamei o segundo yield
console.log(g1.next()) //Chamei o terceiro yield
console.log(g1.next()) //Ele irá me retornat valor undifined e done: true, pq ele é o ultimo.

function* geradora2(){
    let i = 0;
    while(true){   //infinito
        i ++
        yield i    
    }  
}

const g2 = geradora2()
console.log(`clicou ${g2.next().value} vezes.`)
console.log(`clicou ${g2.next().value} vezes.`)
console.log(`clicou ${g2.next().value} vezes.`)
console.log(`clicou ${g2.next().value} vezes.`)
console.log(`clicou ${g2.next().value} vezes.`)
console.log(`clicou ${g2.next().value} vezes.`)
console.log(`clicou ${g2.next().value} vezes.`)