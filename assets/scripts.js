 function exibir_Categoria(categoria) {

     let elementos = document.getElementsByClassName("produtos")
     console.log(elementos);

     for (var i = 0; i < elementos.length; i++) {

         console.log(elementos[i].id);
         if (categoria == elementos[i].id)
             elementos[i].style = "display:block";
         else
             elementos[i].style = "display:none";
     }

 };

 let exibir_todos = () => {
     let elementos = document.getElementsByClassName("produtos")

     for (var i = 0; i < elementos.length; i++) {
         elementos[i].style = "display:block";


     }


 };



 /* Feedback Botão Enviar */

 function feedback() {
     document.getElementById("agradecimento").innerHTML = "Agradeçemos pelo Feedback!";
 }


 /*Confirmar pedido */

 function confirm_pedido() {
     document.getElementById("confirm").innerHTML = "Pedido Recebido";
 }