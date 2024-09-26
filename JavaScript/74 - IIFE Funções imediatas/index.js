(function(nome, peso, altura){
    const sobrenome = 'Paula';
    function criarNome(nome){
        return nome + ' ' + sobrenome;
    }
    function falarOi() {
        console.log(criarNome('Vinícius'))
    }
    falarOi();
    console.log(nome, peso, altura)
})('vini', 30, 18); // para passar parametros para uma IIFE