document.querySelector("#avatar").innerHTML = `<img src = ${localStorage.src}>`


let catalogo = document.querySelector(".catalogo");
let vector = ["./serie1.png", "./serie2.png", "./serie3.png"];



vector.forEach(
    function (e, i) {
        catalogo.innerHTML += "<div class = 'col p-2 m-0'> <img class='img-fluid serie-" + i + "' src="+e+"> </div>";
    }
);
