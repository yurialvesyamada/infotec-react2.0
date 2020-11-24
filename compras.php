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


<div class="container-fluid text-center text-info py-4">
    <div class="row">
        <div class="col-lg-8 mx-auto">
            <h1 class="display-4 text-info">Pedidos</h1>
        </div>
    </div> <!-- End -->
    <div class="row my-4">
        <div class="col-lg-6 mx-auto">
            <div class="card">
                <div class="card-header">

                    <div class="content">
                        <!-- credit card info-->
                        <form role="form" method="POST" action="">

                            <div class="form-group"> <label for="name">
                                    <h6>Nome Completo</h6>
                                </label> <input type="text" name="cliente" placeholder="Nome:" required class="form-control" required>
                            </div>

                            <div class="form-group"> <label for="adress">
                                    <h6>Endereço</h6>
                                </label> <input type="text" name="endereco" placeholder="Endereço:" required class="form-control" required>
                            </div>
                            <div class="form-row">
                                <div class="col">
                                    <div class="form-group"> <label for="phonenumber">
                                            <h6>Telefone</h6>
                                        </label> <input type="number" name="telefone" placeholder="Telefone:" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group"> <label for="age">
                                            <h6>Data de Nascimento</h6>
                                        </label> <input type="date" name="nascimento" placeholder="Data de nascimento:" class="form-control" required>
                                    </div>
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
                                            <option> <?php echo $row["descricao"]; ?> - R$ <?php echo $row["valor_com_desconto"]; ?></option>


                                    <?php
                                        }
                                    } else {
                                        echo "0 results";
                                    }
                                    $conn->close();
                                    ?>
                                </select>
                            </div>



                            <!--  
                            <div id="credit-card" class="tab-pane fade show active">

                                <div class="form-group"> <label for="username">
                                        <h6>Nome do Titular</h6>
                                    </label> <input type="text" name="username" placeholder="Nome do Titular" required class="form-control" required>
                                </div>
                                <div class="form-group"> <label for="cardNumber">
                                        <h6>Número do Cartão</h6>
                                    </label>
                                    <div class="input-group"> <input type="number" name="cardNumber" placeholder="Número do Cartão" class="form-control " required>
                                        <div class="input-group-append"> <span class="input-group-text text-muted"> <i class="fab fa-cc-visa mx-1"></i> <i class="fab fa-cc-mastercard mx-1"></i> <i class="fab fa-cc-amex mx-1"></i> </span> </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-8">
                                        <div class="form-group"> <label><span class="hidden-xs">
                                                    <h6>Data de Validade</h6>
                                                </span></label>
                                            <div class="input-group"> <input type="number" placeholder="MM" name="" class="form-control" required> <input type="number" placeholder="YY" name="" class="form-control" required> </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group mb-4"> <label data-toggle="tooltip" title="Por favor digite o CVV para prosseguir">
                                                <h6>CVV <i class="fa fa-question-circle d-inline"></i></h6>
                                            </label> <input type="number" required class="form-control"> </div>
                                    </div>
                                </div>
                                -->
                            <div class="card-footer"> <button type="submit" class="subscribe btn btn-info btn-block shadow-sm" onclick="confirm_pedido()">Confirmar Pedido</button>
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