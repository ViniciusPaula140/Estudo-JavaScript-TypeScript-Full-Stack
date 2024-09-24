const inputTarefas = document.querySelector('#tarefas');
const btnTarefas = document.querySelector('.btnTarefas');
const listaTarefas = document.querySelector('.listaTarefas');

function botaoApagar(li){
    li.innerText += ' ';
    const apagar = document.createElement('button');
    apagar.innerText = 'Apagar';
    apagar.setAttribute('class', 'Apagar');
    apagar.setAttribute('title', 'Apagar essa tarefa')
    li.appendChild(apagar)
}

inputTarefas.addEventListener('keypress', function(evento){
    if (!inputTarefas.value) return;
    if (evento.keyCode === 13) {
        criarTarefa(inputTarefas.value)
        limpar(inputTarefas)
    }
})

let limpar = (e) => {
    e.value = '';
    e.focus();
} 

function criarLi() {
    const li = document.createElement('li');
    return li;
}

function criarTarefa(e){
    const li = criarLi();
    li.innerText = e
    listaTarefas.appendChild(li)
    botaoApagar(li)
    salvarTarefas()
}

btnTarefas.addEventListener('click', function(){
    if (!inputTarefas.value) return;
    criarTarefa(inputTarefas.value)
})

document.addEventListener('click', function(e) {
    const el = e.target
    if (el.classList.contains('Apagar')) {
        el.parentElement.remove(); //Para so ver o parente é console.log(el.parentElement)
    }    
    salvarTarefas();
})

function salvarTarefas() {
    const liTarefas = listaTarefas.querySelectorAll('li');
    const arrayTarefas = []

    for (let tarefas of liTarefas) {
        let tarefaTexto = tarefas.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        arrayTarefas.push(tarefaTexto)
        console.log(arrayTarefas)
    }

    const tarefasJSON = JSON.stringify(arrayTarefas);
    localStorage.setItem('tarefas', tarefasJSON) //Key: tarefas, value: arrayTarefas que  é o tarefasJSON (Array que foi transformado em string para ser colocado em Json)
}

function adicionarTarefasSalvas() { //Função para exibir as tarefas que foram salvas no Storage com tarefasJSON
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)//Convertendo de volta em array
    
    for (let tarefa of listaDeTarefas) {
        criarTarefa(tarefa)
    }
}
adicionarTarefasSalvas()
