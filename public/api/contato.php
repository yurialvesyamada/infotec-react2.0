<?php require('./connection.php') ?>

<?php
if (isset($_POST['nome']) && isset($_POST['email']) && isset($_POST['telefone']) && isset($_POST['tema']) && isset($_POST['mensagem'])) {

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $tema = $_POST['tema'];
    $mensagem = $_POST['mensagem'];

    $sql = "insert into comentarios (nome, email, telefone, tema, mensagem) values ('$nome', '$email', '$telefone', '$tema', '$mensagem')";
    $result = $conn->query($sql);
}

if ($conn->query($sql) === TRUE) {
    echo "Comentario Registrado!";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}
?>

