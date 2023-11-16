const img = document.querySelectorAll("#perfil img");

img.forEach(
    function (imagen) {
        imagen.addEventListener("click",
            function () {
                localStorage.src = imagen.src;
                window.location.href = "index_user.html";
            }
        )
    }
)