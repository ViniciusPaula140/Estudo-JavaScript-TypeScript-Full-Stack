
function enviar() {
    let nome = document.querySelector('input#name');
    let sobrenome = document.querySelector('input#sobrenome');
    let idade = document.querySelector('input#idade');
    let res = document.querySelector('div#res');
    let sel = document.querySelector('select#lpessoas');
    let array = [];


    let pessoas = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        idade: Number(idade.value)
    };

    let opt = document.createElement('option')
    opt.text = `${pessoas.nome} ${pessoas.sobrenome}, ${pessoas.idade}`

    sel.appendChild(opt);
    array.push(pessoas);

    nome.value = '';
    sobrenome.value = '';
    idade.value = '';
    nome.focus();
};