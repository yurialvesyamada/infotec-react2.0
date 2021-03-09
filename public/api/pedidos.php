<?php require('./connection.php'); 

$nome_cliente = $_POST['nome_cliente'];
$endereco = $_POST['endereco'];
$telefone = $_POST['telefone'];
$descricao = $_POST['descricao'];
$quantidade = $_POST['quantidade'];
$produto = $_POST['produto'];

$sql = "INSERT INTO pedidos (nome_cliente, endereco, telefone, descricao, quantidade, produto) values ('$nome_cliente', '$endereco', '$telefone', '$descricao', '$quantidade', '$produto')";

if ($conn->query($sql) === TRUE) {
    echo "Pedido recebido!";
    header("Refresh: 0;url=http://localhost:3000/pedidos");

} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}
