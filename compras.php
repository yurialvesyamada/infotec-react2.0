<!-- Conexões com PHP/includes  -->
<?php require("includes/cabecalho.php") ?>
<?php require("includes/conexao.php") ?>

<div class="container-fluid py-4">
    <div class="row mb-4">
        <div class="col-lg-8 mx-auto text-center">
            <h1 class="display-4 text-info">Dados Bancários</h1>
        </div>
    </div> <!-- End -->
    <div class="row">
        <div class="col-lg-6 mx-auto">
            <div class="card ">
                <div class="card-header">
                    <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                        <!-- Credit card form tabs -->
                        <ul role="tablist" class="nav bg-light nav-pills rounded nav-fill mb-3">
                            <li class="nav-item"> <a data-toggle="pill" href="#credit-card" class="nav-link active "> <i class="fas fa-credit-card mr-2"></i> Cartão de Crédito </a> </li>
                            <li class="nav-item"> <a data-toggle="pill" href="#paypal" class="nav-link "> <i class="fab fa-paypal mr-2"></i> Paypal </a> </li>
                            <li class="nav-item"> <a data-toggle="pill" href="#net-banking" class="nav-link "> <i class="fas fa-mobile-alt mr-2"></i> Internet Banking </a> </li>
                        </ul>
                    </div> <!-- End -->
                    <!-- Credit card form content -->
                    <div class="tab-content">
                        <!-- credit card info-->
                        <div id="credit-card" class="tab-pane fade show active pt-3">
                            <form role="form">
                                <div class="form-group"> <label for="username">
                                        <h6>Nome do Titular</h6>
                                    </label> <input type="text" name="username" placeholder="Nome do Titular" required class="form-control "> 
                                </div>
                                <div class="form-group"> <label for="cardNumber">
                                        <h6>Número do Cartão</h6>
                                    </label>
                                    <div class="input-group"> <input type="text" name="cardNumber" placeholder="Número do Cartão" class="form-control " required>
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
                                            </label> <input type="text" required class="form-control"> </div>
                                    </div>
                                </div>
                                <div class="card-footer"> <button type="button" class="subscribe btn btn-primary btn-block shadow-sm"> Confirmar Pagamento </button>
                            </form>
                        </div>
                    </div> <!-- End -->
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<div class="text-center text-info my-5">
    <h2>Formas de Pagamento</h2>
    <img src="assets/img/pagamento_new.png" title="Formas de Pagamento">
</div>

<!-- Rodapé Includes -->
<?php require("includes/rodape.php") ?>