<!-- Conexões com PHP/includes  -->
<?php require("includes\cabecalho.php") ?>

<div class="container-fluid text-center">
  <h2 class="bg-light text-info text-center">Produtos</h2>
  <div class="row">
    <?php for ($i = 0; $i < 10; $i++) { ?>
      <div class="card shadow bg-white rounded col-12 col-md-6 col-lg-3">
        <img src="assets\img\notebook_acer_gamer.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Notebook Acer</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    <?php } ?>

  </div>
</div>


<!-- Rodapé Includes -->
<?php require("includes/rodape.php") ?>