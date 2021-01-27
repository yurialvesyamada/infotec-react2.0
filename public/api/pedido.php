<?php require('./connection.php') ?>

<?php
$sql = "SELECT produto.descricao, pedidos.nome_cliente
    FROM produto
    INNER JOIN pedidos
    ON produto.idproduto=pedidos.produto";
$result = $conn->query($sql);
echo json_encode($result->fetch_all(MYSQLI_ASSOC));

$conn->close();
?>
