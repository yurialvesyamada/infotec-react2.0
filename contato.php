<!-- Conexões com PHP/includes  -->
<?php require("includes\cabecalho.php") ?>
<?php require("includes/conexao.php") ?>

<?php
if (isset($_POST['nome']) && isset($_POST['email']) && isset($_POST['tema']) && isset($_POST['mensagem'])) {
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $tema = $_POST['tema'];
  $mensagem = $_POST['mensagem'];

  $sql = "insert into comentarios (nome, email, tema, mensagem) values ('$nome', '$email', '$tema','$mensagem')";
  $result = $conn->query($sql);
}
?>

 <!-- Logos  -->
<div class="container-fluid text-center text-info mb-4">
  <h2 class="display-4 my-4">Redes Sociais</h2>
  <div class="row py-5">
    <div class="col">
      <h5 class="logo"><a href="" title="© 2020 Copyright InfoTec">
          <img src="assets/img/email-logo2.png" alt="Email InfoTec" width="100px"></a>
        <p class="my-2">lojas@infotec.com</p>
      </h5>
    </div>
    <div class="col">
      <h5 class="logo"><a href="" title="© 2020 Copyright InfoTec">
          <img src="assets/img/instagram_transparent2.jpg" alt="Instagram InfoTec" width="100px"></a>
        <p class="my-2">@InfoTec</p>
      </h5>
    </div>
    <div class="col">
      <h5 class="logo"><a href="https://web.whatsapp.com/" target="_blank" title="© 2020 Copyright InfoTec">
          <img src="assets/img/wpp_transparent.png" alt="WhatsApp InfoTec" width="100px"></a>
        <p class="my-2">(11) 94875-6799</p>
      </h5>
    </div>
    <div class="col">
      <h5 class="logo"><a href="" title="© 2020 Copyright InfoTec">
          <img src="assets/img/facebook-logo.png" alt="Facebook InfoTec" width="100px"></a>
        <p class="my-2">InfoTec</p>
      </h5>
    </div>
  </div>

    <!-- Formulário Fale Conosco -->
  <form class="container w-50" method="POST" action="">
    <h6 class="display-4 py-5">Fale Conosco</h6>
    <div class="form-group">
      <label for="exampleFormControlInput1">Nome Completo</label>
      <input type="name" name="nome" class="form-control" id="exampleFormControlInput1" placeholder="Escreva seu nome" required>
    </div>

    <div class="form-group">
      <label for="exampleFormControlInput1">E-mail</label>
      <input type="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="nome@exemplo.com" required>
    </div>

    <div class="form-group">
      <label for="exampleFormControlSelect1">Temas</label>
      <select class="form-control" name="tema" id="exampleFormControlSelect1" required>
        <option selected disabled>Selecione um tema</option>
        <option>Dicas e Opiniões</option>
        <option>Produtos</option>
        <option>Relatar Erros/Bugs</option>
        <option>Compras</option>
        <option>Outros</option>
      </select>
    </div>

    <div class="form-group">
      <label for="exampleFormControlTextarea1">Escreva aqui</label>
      <textarea class="form-control" name="mensagem" id="exampleFormControlTextarea1" rows="3" required></textarea>
    </div>
    <button type="submit" class="btn btn-info w-25">Enviar</button>
  </form>
  <!-- Fim de Formulário Fale Conosco -->
</div>

<div class="text-center text-info py-5">
  <h2>Formas de Pagamento</h2>
  <img src="assets/img/pagamento_new.png" title="Formas de Pagamento">
</div>

<!-- Rodapé Includes -->
<?php require("includes/rodape.php") ?>