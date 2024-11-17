function enviardados() {
    // Obtém os elementos do formulário
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;

    // Concatena o nome e sobrenome
    var nomeCompleto = nome + " " + sobrenome;

    // Exibe um alerta com o nome completo
    alert("Nome completo: " + nomeCompleto);
}