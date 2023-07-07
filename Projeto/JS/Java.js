// Função para validar o nome de usuário e senha
function validarCredenciais() {
    // Obter os valores inseridos pelo usuário
    var nomeUsuario = document.getElementById("nome-usuario").value;
    var senha = document.getElementById("senha").value;

    // Variável fixa vinda do HTML
    var usuarioValido = document.getElementById("usuario-fix").value;

    // Verificar se os valores correspondem aos válidos
    if (nomeUsuario === usuarioValido && senha === senhaValida) {
    alert("Credenciais válidas! Acesso permitido.");
    } else {
    alert("Credenciais inválidas! Acesso negado.");
    }
}
