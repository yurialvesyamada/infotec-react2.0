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
            <span onclick="exibir_Categoria('Notebooks')">Notebooks</span> <span>8</span>
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

    <!-- Cards Produtos -->
    <div class="card-deck mx-auto w-75 h-50 text-center align-items-top shadow-sm p-3 mb-5 bg-light rounded">
      <div class="card shadow bg-white rounded">
        <img src="assets\img\placa-de-video-gtx.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>

      <div class="card shadow bg-white rounded">
        <img src="assets\img\placa-de-video-gtx.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>

      <div class="card shadow bg-white rounded">
        <img src="assets\img\placa-de-video-gtx.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>

      <div class="card shadow bg-white rounded">
        <img src="assets\img\placa-de-video-gtx.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>

    </div>
    <!-- Fim de Cards Produtos -->

  </div>
</div>



<!-- Rodapé Includes -->
<?php require("includes/rodape.php") ?>