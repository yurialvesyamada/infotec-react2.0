<!-- Conexões com PHP/includes  -->
<?php require("includes/cabecalho.php") ?>
<?php require("includes/conexao.php") ?>

<?php
if (isset($_POST['cliente']) && isset($_POST['endereco']) && isset($_POST['telefone']) && isset($_POST['nascimento']) && isset($_POST['descricao'])) {

    $cliente = $_POST['cliente'];
    $endereco = $_POST['endereco'];
    $telefone = $_POST['telefone'];
    $nascimento = $_POST['nascimento'];
    $descricao = $_POST['descricao'];

    $sql = "insert into pedidos (cliente, endereco, telefone, nascimento, descricao) values ('$cliente', '$endereco', '$telefone', '$nascimento', '$descricao')";

    $result = $conn->query($sql);
}
?>


<div class="container-fluid text-center text-info my-4">
    <h1 class="h1">Pedidos</h1>
    <div class="row my-4">
        <div class="col-lg-6 mx-auto">
            <div class="card">
                <div class="card-header">

                    <div class="content">
                        <!-- credit card info-->
                        <form role="form" method="POST" action="">

                            <p class="form-group"> <label for="name">
                                    Nome Completo
                                </label> <input type="text" name="cliente" placeholder="Nome:" required class="form-control" required>
                            </p>

                            <p class="form-group"> <label for="adress">
                                    Endereço
                                </label> <input type="text" name="endereco" placeholder="Endereço:" required class="form-control" required>
                            </p>
                            <div class="form-row">
                                <div class="col">
                                    <p class="form-group"> <label for="phonenumber">
                                            Telefone
                                        </label> <input type="number" name="telefone" placeholder="Telefone:" class="form-control" required>
                                    </p>
                                </div>
                                <div class="col">
                                    <p class="form-group"> <label for="age">
                                            Data de Nascimento
                                        </label> <input type="date" name="nascimento" placeholder="Data de nascimento:" class="form-control" required>
                                    </p>
                                </div>

                                <select class="custom-select mx-1 my-3" name="descricao" required>
                                    <option selected disabled>Selecione o produto</option>
                                    <?php
                                    $sql = "SELECT * FROM produto";
                                    $result = $conn->query($sql);

                                    if ($result->num_rows > 0) {
                                        // output data of each row
                                        while ($row = $result->fetch_assoc()) {

                                    ?>
                                            <option> <?php echo $row["descricao"]; ?> - R$ <?php echo $row["preco_final"]; ?></option>


                                    <?php
                                        }
                                    } else {
                                        echo "0 results";
                                    }
                                    $conn->close();
                                    ?>
                                </select>
                            </div>

                            <h1 class="card-footer"> <button type="submit" class="btn btn-info btn-block shadow-sm" onclick="confirm_pedido()">Confirmar Pedido</button>
                            </h1>
                        </form>
                        <div class="mt-4 text-center text-success">
                            <p id="confirm"></p>
                        </div>
                    </div>
                </div> <!-- End -->
            </div>
        </div>
    </div>
</div>

</div>
</div>

<!-- Rodapé Includes -->
<?php require("includes/rodape.php") ?>