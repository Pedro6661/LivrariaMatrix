let livros = [];
let total = parseFloat(0);
let medias = parseFloat(0);

function preencherArray() {
    let livroNome = document.getElementById("livroNome").value;
    let livroValor = parseFloat(document.getElementById("livroValor").value);
    let tabela = document.getElementById("tabela");
  

    if (livroNome === "" || isNaN(livroValor)) {
        window.alert("Erro! Por favor insira os dados corretamente!");
        return;
    } else {
        livros.push({
            livroNome,
            livroValor
        });

        

        exibirTabela(livros);
    }
}

function exibirTabela() {
    tabela.innerHTML = "";
    tabela.innerHTML += `
    <tr>
        <th>ID</th>
        <th>NOME DO LIVRO</th>
        <th>VALOR DO LIVRO</th>
    </tr>`;
    for (i = 0; i < livros.length; i++) {
        tabela.innerHTML += `
    <tr>
        <td>${i + 1}</td>
        <td>${livros[i].livroNome}</td>
        <td>R$ ${livros[i].livroValor.toFixed(2)}</td>
    </tr>`;
    }
    livroNome = "";
    livroValor = "";
    event.preventDefault();
}

function remover() {
    livros.pop();
    exibirTabela(livros);
}

function limpar() {
    tabela.innerHTML = "";
    livros = [];
    event.preventDefault();
}


function exibirTabelaMedia() {
    for (i = 0; i < livros.length; i++) {
        total += livros[i].livroValor;
    }

    medias = total/livros.length;    
    tabela.innerHTML += `
    <tr>
        <th>TOTAL</th>
        <th colspan="2">UNITARIO</th>
    </tr>
    <tr>
        <td>R$ ${total.toFixed(2)}</td>
        <td colspan="2">R$ ${medias.toFixed(2)}</td>
    </tr>`;
}