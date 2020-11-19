<!-- Conexões com PHP/includes  -->
<?php require("includes/cabecalho.php") ?>
<?php require("includes/conexao.php") ?>

<?php
if (isset($_POST['nome']) && isset($_POST['email']) && isset($_POST['telefone']) && isset($_POST['tema']) && isset($_POST['mensagem'])) {

  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $telefone = $_POST['telefone'];
  $tema = $_POST['tema'];
  $mensagem = $_POST['mensagem'];

  $sql = "insert into comentarios (nome, email, telefone, tema, mensagem) values ('$nome', '$email', '$telefone', '$tema', '$mensagem')";

  $result = $conn->query($sql);
}
?>

<!-- Formulário Fale Conosco -->
<form class="container w-50 text-center text-info" method="POST" action="">
  <h6 class="display-4 py-4">Fale Conosco</h6>
  <div class="form-group">
    <label for="exampleFormControlInput1">Nome Completo</label>
    <input type="name" name="nome" class="form-control" id="exampleFormControlInput1" placeholder="Digite seu nome" required>
  </div>

  <div class="form-group">
    <label for="exampleFormControlInput2">E-mail</label>
    <input type="email" name="email" class="form-control" id="exampleFormControlInput2" placeholder="nome@exemplo.com" required>
  </div>

  <div class="form-group">
    <label for="exampleFormControlInput2">Telefone - Celular</label>
    <input type="telefone" name="telefone" class="form-control" id="exampleFormControlInput3" placeholder="Digite seu número" required>
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
  <button type="reset" class="btn btn-info w-25 mx-5 mt-4">Limpar</button>
  <button type="submit" class="btn btn-info w-25 mx-5 mt-4" onclick="feedback()">Enviar</button>
</form>
<div class="mt-4 text-center text-success">
  <p id="agradecimento"></p>
</div>
<!-- Fim de Formulário Fale Conosco -->
</div>



<!-- Logos  -->
<div class="container-fluid text-center text-info py-5">
  <div class="row mx-3">
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

  <!--  
  <div class="text-center text-info mt-5">
    <h2>Formas de Pagamento</h2>
    <img src="assets/img/pagamento_new.png" title="Formas de Pagamento">
  </div>
  -->
</div>

<!-- Rodapé Includes -->
<?php require("includes/rodape.php") ?>