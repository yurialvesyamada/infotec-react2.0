<!-- Conexões com PHP/includes  -->
<?php require("includes/cabecalho.php") ?>
<?php require("includes/conexao.php") ?>

<h1 class="text-center text-info my-4 h1">Categorias</h1>

<!-- Produtos/Categorias -->
<div class="container-fluid mb5">
  <div class="row">
    <div class="col-md-2 bg-info text-white rounded">
      <div class="produtos p-2">
        <h1 class="text-uppercase text-center">Produtos</h1>
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
            <p class="text-uppercase">Processadores</p>
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
          <div class="heading d-flex justify-content-between">
            <p class="text-uppercase">Marcas</p>
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

    <div class="col-sm-8 col-md-9">
      <div class="row ml-4">

        <?php
        $sql = "SELECT * FROM produto";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
          // output data of each row
          while ($row = $result->fetch_assoc()) {

        ?>


            <!-- Cards Produtos -->
            <div class="col-md-6 col-lg-3 text-center  shadow-sm p-2 mb-5 bg-light rounded">
              <div class="produtos" id="<?php echo $row["categoria"]; ?>">
                <div class="card shadow bg-white rounded">
                  <img src="./img/<?php echo $row["imagem"]; ?>" class="card-img-top w-75 my-2" alt="Imagens">
                  <div class="card-body">
                    <h5 class="card-text"> <img src="img/stars1.png" width="100px" title="Avaliações"> </h5>
                    <p class="card-text"><?php echo $row["descricao"]; ?></p>
                    <p class="card-text"><small class="text-danger h6">R$ <del><?php echo $row["preco"]; ?><del></small></p>
                    <p class="card-text"><small class="text-info h3">R$ <?php echo $row["preco_final"]; ?></small></p>
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

  </div>
</div>



<!-- Rodapé Includes -->
<?php require("includes/rodape.php") ?>