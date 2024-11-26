exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            name: <input type="text" name="VINICIUS-BONITO">
            <button>Enviar</button>
        </form>
        `)
}

exports.trataPost = (req, res) => {
    res.send('Eu sou sua rota POST')
}
