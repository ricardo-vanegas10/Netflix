let input1 = document.querySelector("#user");
let input2 = document.querySelector("#email");
let input3 = document.querySelector("#password");
let boton = document.querySelector("#boton");
let press = document.querySelector("#sing");
let input4 = document.querySelector("#email2");
let input5 = document.querySelector("#password2");
let boton2 = document.querySelector("#boton2");

const allowedUser = "user";
const allowedEmail = "email";
const allowedPassword = "password";

function register() {
 
    const user = input1.value;
    const email = input2.value;
    const password = input3.value;


    if (user === "" || email === "" || password === "") {
        alert("Debes llenar todos los campos");
        return;
    }


    localStorage.setItem("user", user);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("Registro exitoso");
    window.open("pages/profile.html");
}
function verify() {
    const email = input4.value;
    const password = input5.value;

    if (email === localStorage.getItem("email") && password === localStorage.getItem("password")) {

        window.open("pages/profile.html");
    } else {
 
        alert("Usuario o contraseña incorrectos");
    }
}

boton.addEventListener("click", register);
boton2.addEventListener("click", verify);

label1.textContent = localStorage.getItem("user");
label2.textContent = localStorage.getItem("email");
label3.textContent = localStorage.getItem("password");
