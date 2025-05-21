<?php
header('Content-Type: application/json');

include 'db_conexao.php';
$conexao = OpenCon();

// As tabelas foram criadas no servidor de banco de dados.
// Foi inserido um usuário com ID 1 na tabela 'login'.
// A senha '1' foi cadastrada para o usuário de ID 1.
// O objetivo desta página é validar o login do usuário ao acessar a página de login do projeto.
// Quando o botão de login for clicado, esta página (login.php) será acionada para verificar se os dados estão corretos.
// Se os dados estiverem corretos, o acesso ao site será liberado ("Acesso Liberado").
// Caso contrário, será exibida uma mensagem informando que os dados estão incorretos ("Acesso Negado").
// Exemplos de acesso:
// http://projetop1medinalab.rf.gd/login.php?usuario=1&senha=1 --> Acesso Liberado
// http://projetop1medinalab.rf.gd/login.php?usuario=1&senha=2 --> Acesso Negado

//Recebendo os parâmetros
$usuario = $_REQUEST['usuario'] ?? '';
$senha = $_REQUEST['senha'] ?? '';

//Consulta no banco
$sql = "SELECT * FROM login WHERE user_a = ? AND key_user = ?";
$stmt = $conexao->prepare($sql);
$stmt->bind_param("ss", $usuario, $senha);
$stmt->execute();

$result = $stmt->get_result();

$resposta = [];

//Retorna o resultado
if ($result->num_rows > 0) {
	$linha = $result->fetch_assoc();
    $resposta['status'] = 'sucesso';
    $resposta['mensagem'] = 'Acesso liberado';
	$resposta['id'] = $linha['id_user'];
} else {
    $resposta['status'] = 'erro';
    $resposta['mensagem'] = 'Acesso negado';
	$resposta['id'] = '0';
}

echo json_encode($resposta);

$stmt->close();
CloseCon($conexao);
?>