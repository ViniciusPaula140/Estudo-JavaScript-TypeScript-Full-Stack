axios('pessoas.json')
  .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
  const table = document.createElement('table');
  
  const tbody = document.createElement('tbody'); // Cria o corpo da tabela

  for (let pessoa of json) {
    const tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = pessoa.nome;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = pessoa.idade;
    tr.appendChild(td2);

    tbody.appendChild(tr); // Adiciona a linha ao corpo da tabela
  }

  table.appendChild(tbody); // Adiciona o corpo da tabela à tabela

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table); // Adiciona a tabela ao contêiner
}
