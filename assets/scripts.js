 /* function exibir_Categoria(categoria) {

    let elementos = document.getElementsByClassName("produtos")
    console.log(elementos);

    for (var i = 0; i < elementos.length; i++) {

        console.log(elementos[i].id);
        if (categoria == elementos[i].id)
            elementos[i].style = "display:flex";
        else
            elementos[i].style = "display:none";
    }

};

let exibir_todos = () => {
    let elementos = document.getElementsByClassName("produtos")

    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style = "display:flex";


    }


};

*/

/* Feedback Botão Enviar */

function feedback() {
    document.getElementById("agradecimento").innerHTML = "Agradeçemos pelo Feedback!";
}



