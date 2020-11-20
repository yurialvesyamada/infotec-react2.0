<!-- Conexões com PHP/includes  -->
<?php require("includes/cabecalho.php") ?>
<?php require("includes/conexao.php") ?>

<div class="display-4 text-center text-info my-4">Categorias</div>

<!-- Produtos/Categorias -->
<div class="container-fluid mb5">
  <div class="row">
    <div class="col-md-2 bg-info text-white rounded">
      <div class="produtos p-1">
        <h6 class="text-uppercase">Produtos</h6>
        <div class="p-lists">
          <div class="d-flex justify-content-between mt-2">
            <span onclick="exibir_todos()">Todos</span> <span>16</span>
          </div>
          <div class="d-flex justify-content-between mt-2">
            <span onclick="exibir_Categoria('Notebook')">Notebooks</span> <span>8</span>
          </div>
          <div class="d-flex justify-content-between mt-2">
            <span onclick="exibir_Categoria('Placa de Vídeo')">Placa de Vídeo</span> <span>4</span>
          </div>
          <div class="d-flex justify-content-between mt-2">
            <span onclick="exibir_Categoria('Processadores')">Processadores</span> <span>2</span>
          </div>
          <div class="d-flex justify-content-between mt-2">
            <span onclick="exibir_Categoria('Memória RAM')">Memória RAM</span> <span>1</span>
          </div>
          <div class="d-flex justify-content-between mt-2">
            <span onclick="exibir_Categoria('Monitores')">Monitores</span> <span>1</span>
          </div>
          <div class="d-flex justify-content-between mt-2">
            <span>CPU</span> <span>Em breve</span>
          </div>
        </div>
      </div>
      <!-- Processadores Checkbox -->
      <div class="content text-center">
        <div class="p-2 border-top border-light">
          <div class="heading d-flex justify-content-between align-items-center">
            <h6 class="text-uppercase">Processadores</h6> <span>--</span>
          </div>

          <div class="d-flex justify-content-between mt-2">
            <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked> <label class="form-check-label" for="flexCheckChecked"> Intel Core i9 </label> </div> <span>1</span>
          </div>

          <div class="d-flex justify-content-between mt-2">
            <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked> <label class="form-check-label" for="flexCheckChecked"> Intel Core i7 </label> </div> <span>4</span>
          </div>

          <div class="d-flex justify-content-between mt-2">
            <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked> <label class="form-check-label" for="flexCheckChecked"> Intel Core i5 </label> </div> <span>2</span>
          </div>

          <div class="d-flex justify-content-between mt-2">
            <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked> <label class="form-check-label" for="flexCheckChecked"> AMD Ryzen 7 </label> </div> <span>2</span>
          </div>

          <div class="d-flex justify-content-between mt-2">
            <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked> <label class="form-check-label" for="flexCheckChecked"> AMD Ryzen 5 </label> </div> <span>2</span>
          </div>

        </div>
        <!--  Marcas Checkbox -->
        <div class="p-2 border-top border-light">
          <div class="heading d-flex justify-content-between align-items-center">
            <h6 class="text-uppercase">Marcas</h6> <span>--</span>
          </div>

          <div class="d-flex justify-content-between mt-2">
            <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked> <label class="form-check-label" for="flexCheckChecked"> Samsung </label> </div> <span>1</span>
          </div>

          <div class="d-flex justify-content-between mt-2">
            <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked> <label class="form-check-label" for="flexCheckChecked"> Acer </label> </div> <span>4</span>
          </div>

          <div class="d-flex justify-content-between mt-2">
            <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked> <label class="form-check-label" for="flexCheckChecked"> Sony </label> </div> <span>2</span>
          </div>

          <div class="d-flex justify-content-between mt-2">
            <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked> <label class="form-check-label" for="flexCheckChecked"> Dell </label> </div> <span>2</span>
          </div>

          <div class="d-flex justify-content-between mt-2">
            <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked> <label class="form-check-label" for="flexCheckChecked"> Lenovo </label> </div> <span>2</span>
          </div>
        </div>

      </div>
    </div>

    <?php
    $sql = "SELECT * FROM produto";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
      // output data of each row
      while ($row = $result->fetch_assoc()) {

    ?>


        <!-- Cards Produtos -->
        <div class="card-deck mx-auto w-25 h-50 text-center align-items-top shadow-sm p-2 mb-5 bg-light rounded">
          <div class="produtos" id="<?php echo $row["categoria"]; ?>">
            <div class="card shadow bg-white rounded">
              <img src="<?php echo $row["imagem"]; ?>" class="card-img-top w-75 my-2" alt="...">
              <div class="card-body">
                <h5 class="card-text"> <img src="assets\img\stars1.png" width="90px"> </h5>
                <p class="card-text"><?php echo $row["descricao"]; ?></p>
                <p class="card-text"><small class="text-muted h6">R$ <del><?php echo $row["valor_sem_desconto"]; ?><del></small></p>
                <p class="card-text"><small class="text-danger h4">R$<?php echo $row["valor_com_desconto"]; ?></small></p>
              </div>
            </div>
          </div>
        </div>
        <!-- Fim de Cards Produtos -->

    <?php
      }
    } else {
      echo "0 results";
    }
    $conn->close();
    ?>

  </div>
</div>



<!-- Rodapé Includes -->
<?php require("includes/rodape.php") ?>