<?php require('./connection.php') ?>

<?php

$sql = "SELECT * FROM produto";
$result = $conn->query($sql);
echo json_encode($result->fetch_all(MYSQLI_ASSOC));

$conn->close();
?>
