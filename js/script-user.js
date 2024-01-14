document.querySelector("#avatar").innerHTML = `<img src = ${localStorage.src}>`


let catalogo = document.querySelector(".catalogo");
let vector = ["./img/serie1.png", "./img/serie2.png", "./img/serie3.png"];



vector.forEach(
    function (e, i) {
        catalogo.innerHTML += "<div class = 'col p-2 m-0'> <img class='img-fluid serie-" + i + "' src="+e+"> </div>";
    }
);
