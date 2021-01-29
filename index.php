  <!-- Conexões com PHP/includes  -->
  <?php require("includes/cabecalho.php") ?>
  <?php require("includes/conexao.php") ?>

  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">
          <div class="carousel-item active">
              <img src="img/i9 back.jpg" class="d-block w-100" alt="Core i9">
          </div>
          <div class="carousel-item">
              <img src="img/card.jpg" class="d-block w-100" alt="Processadores">
          </div>
          <div class="carousel-item">
              <img src="img/back_amd.jpg" class="d-block w-100" alt="AMD Ryzen">
          </div>
          <div class="carousel-item">
              <img src="img/news_banner.png" class="d-block w-100" alt="Intel Power">
          </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
      </a>
  </div>





  <!-- Rodapé Includes -->
  <?php require("includes/rodape.php") ?>