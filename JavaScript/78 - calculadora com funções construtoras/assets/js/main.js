function Calculadora() {
    // Atributo: exibe o elemento do DOM com a classe 'display'
    this.display = document.querySelector('.display');

    // Método: inicia a captura de cliques
    this.iniciar = () => {
    this.capturaClick();
    this.caputuraEnter();
    };

    this.caputuraEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.key !== 'Enter') return;
            this.resultado();
        })
    }

    // Método: captura cliques em botões
    this.capturaClick = () => {
        // Adiciona um listener de evento de clique ao documento
        document.addEventListener('click', e => {
            const el = e.target; // Armazena o elemento que foi clicado
            // Verifica se o elemento clicado é um botão numérico
            if (el.classList.contains('btn-num')) this.addDisplay(el);
            // Verifica se o elemento clicado é o botão de limpar
            if (el.classList.contains('btn-clear')) this.clear();
            // Verifica se o elemento clicado é o botão de deletar
            if (el.classList.contains('btn-del')) this.del();
            // Verifica se o elemento clicado é o botão de igual
            if (el.classList.contains('btn-eq')) this.resultado();
        });
    };

    // Método: adiciona o texto do botão clicado ao display
    this.addDisplay = e => {
        this.display.value += e.innerText;
        this.display.focus()
    }

    // Método: limpa o display
    this.clear = () => this.display.value = '';

    // Método: remove o último caractere do display
    this.del = () => this.display.value = this.display.value.slice(0, -1);

    // Método: calcula o resultado da expressão no display
    this.resultado = () => {
        const conta = eval(this.display.value); // Avalia a expressão matemática
        // Verifica se a conta é válida
        if (!conta) {
            alert('Conta inválida');
            return;
        }

        try {
            // Atualiza o display com o resultado
            this.display.value = conta;
        } catch (e) {
            alert('Conta inválida');
            return;
        }
    };
}

// Cria uma nova instância da calculadora e inicia
const calculadora = new Calculadora();
calculadora.iniciar();