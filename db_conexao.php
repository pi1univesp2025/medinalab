<?php
function OpenCon() {
$dbhost = "servidor_ip";
$dbuser = "usuario_nome";
$dbpass = "usuario_senha";
$dbname = "bancodadosnome";
$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
if ($conn->connect_error) {
die("Falha na conexao: " . $conn->connect_error);
}
return $conn;
}
function CloseCon($conn) {
$conn->close();
}
?>