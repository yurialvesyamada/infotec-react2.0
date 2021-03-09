<?php require('./connection.php');

if (isset($_POST['nome']) && isset($_POST['email']) && isset($_POST['telefone']) && isset($_POST['tema']) && isset($_POST['mensagem'])) {

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $tema = $_POST['tema'];
    $mensagem = $_POST['mensagem'];

    $sql = "insert into comentarios (nome, email, telefone, tema, mensagem) values ('$nome', '$email', '$telefone', '$tema', '$mensagem')";
    $result = $conn->query($sql);

    header("Refresh: 0;url=http://localhost:3000/infotec-react2.0");
}

if ($conn->query($sql) === TRUE) {
    echo "Comentario Registrado!";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}
