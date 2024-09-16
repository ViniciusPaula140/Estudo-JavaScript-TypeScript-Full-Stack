function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function getDataHoje(data) {
    let dia = data.getDay();

    switch (dia) {
        case 0:
            dia = 'domingo, '
            return dia;
        case 1:
            dia = 'segunda-feira, '
            return dia;
        case 2:
            dia = 'terça-feira, '
            return dia;
        case 3:
            dia = 'quarta-feira, '
            return dia;
        case 4:
            dia = 'quinta-feira, '
            return dia;
        case 5:
            dia = 'sexta-feira, '
            return dia;
        case 6:
            dia = 'sábado, '
            return dia;
    }
}

function getTitle(num, complemento) {
    const titulo = document.querySelector('.titulo')
    titulo.innerHTML = num
    titulo.innerHTML += complemento
}

function complemento(data) {
    const dia = zeroEsquerda(data.getDate());
    let mes = data.getMonth();
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const minutos = zeroEsquerda(data.getMinutes());

    switch (mes) {
        case 0:
            mes = ' de janeiro'; break;
        case 1:
            mes = ' de fevereiro'; break;
        case 2:
            mes = ' de março'; break;
        case 3:
            mes = ' de abril'; break;
        case 4:
            mes = ' de maio'; break;
        case 5:
            mes = ' de junho'; break;
        case 6:
            mes = ' de julho'; break;
        case 7:
            mes = ' de agosto'; break;
        case 8:
            mes = ' de setembro'; break;
        case 9:
            mes = ' de outubro'; break;
        case 10:
            mes = ' de novembro'; break;
        case 11:
            mes = ' de dezembro'; break;
    }

    return `${dia} ${mes} de ${ano} ${hora}:${minutos}`
}

const generico = new Date();


const data = getDataHoje(generico);
const dias = complemento(generico);
console.log(dias)

const title = getTitle(data, dias)


