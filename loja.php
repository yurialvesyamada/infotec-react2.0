<!-- Conexões com PHP/includes  -->
<?php require("includes\cabecalho.php") ?>
<?php require("includes/conexao.php") ?>


<div class="container-fluid text-center mb-4 shadow-sm  bg-light rounded">
    <h2 class="display-4 bg-light text-info my-4">Conheça Já</h2>
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">Cidade</th>
                <th scope="col">Endereço</th>
                <th scope="col">Complemento</th>
                <th scope="col">Telefone</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>São Paulo</th>
                <td>Avenida Paulista, 985</td>
                <td>3º Andar</td>
                <td>(11) 4444-4444</td>
            </tr>
            <tr>
                <th>Rio de Janeiro</th>
                <td>Avenida Presidente Vargas, 500</td>
                <td>10º Andar</td>
                <td>(21) 3333-3333</td>
            </tr>
            <tr>
                <th>Minas Gerais</th>
                <td>Avenida Presidente Tancredo Neves</td>
                <td>2º Andar</td>
                <td>(31) 4941-9849</td>
            </tr>

            <tr>
                <th>Santa Catarina</th>
                <td>Rua Major Vila, 370</td>
                <td>10º Andar</td>
                <td>(48) 5555-5555</td>
            </tr>
        </tbody>
    </table>

</div>

<div class="text-center text-info my-5">
    <h2>Formas de Pagamento</h2>
    <img src="assets/img/pagamento_new.png" title="Formas de Pagamento">
</div>


<!-- Rodapé Includes -->
<?php require("includes/rodape.php") ?>