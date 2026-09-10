

function estudarLivro(livro) {
    alert("Você escolheu estudar o livro de " + livro + "!");
}

function buscarLivro() {
    let livro = document.getElementById("busca").value;

    if (livro === "") {
        document.getElementById("mensagem").innerText =
            "Digite o nome de um livro.";
    } else {
        document.getElementById("mensagem").innerText =
            "Você pesquisou por: " + livro;
    }
}